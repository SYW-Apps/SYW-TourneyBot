import { createContext, useContext, useState } from "react";

import moment from "moment-timezone";

import { isError } from "../api/api";
import { useAPI } from "../api/api-context";

import UnknownAccount from "../models/Accounts/UnknownAccount";
import { generateQuery } from "../tools/query";

export const optionalAuthorization = import.meta.env.VITE_OPTIONAL_AUTHORIZATION?.toLowerCase() || false;

const AccountContext = createContext({});
export type AccountContextValue = UnknownAccount & { loaded: boolean, authorizationRequired: boolean, authorized: boolean, signIn: (sessionToken: string, sessionSecret: string, accountId: string, role: number, expiresIn: number, origin_path?: string) => void, signOut: () => void };

export const authStorageName = 'syw-account-auth';

export function AccountProvider({ children }: { children: any }) {
    const Api = useAPI();

    function signIn(sessionToken: string, sessionSecret: string, accountId: string, role: number, expiresIn: number, origin_path?: string) {
        if (sessionToken && sessionToken.length == 48) {
            var expires_at = null;
            if (expiresIn) {
                expires_at = moment().add({ seconds: expiresIn - 30 })
            }

            localStorage.setItem(authStorageName, `${sessionToken}::${accountId}::${role}::${expires_at}::${sessionSecret}`);

            loadAccountDetails().then(() => {
                window.location.href = origin_path || '/home';
            });
        }
        else {
            window.location.href = `${loginPath}${unauthorizedPaths.some(unauthorizedPath => window.location.pathname.startsWith(unauthorizedPath)) ? '' : generateQuery({ origin_path: origin_path ?? window.location.pathname })}`;
        }
    }

    function signOut() {
        Api.logout().then(() => {
            localStorage.removeItem(authStorageName);

            setAccount({
                ...new UnknownAccount(),
                authorizationRequired: !optionalAuthorization,
                authorized: false,
                loaded: false,
    
                role: 0,
                signIn,
                signOut,
            });
        });
    }

    const [account, setAccount] = useState<AccountContextValue>({
        ...new UnknownAccount(),
        authorizationRequired: !optionalAuthorization,
        authorized: false,
        loaded: false,

        signIn,
        signOut,
    });

    const loginPath = '/login';
    const unauthorizedPaths = ['/privacy', '/tos', '/documentation', loginPath, '/register', '/verify', '/2fa'];

    async function loadAccountDetails() {
        const auth = localStorage.getItem(authStorageName)?.split('::');

        let accountId = account.uniqueId || auth?.at(1);

        if (!accountId) return console.log('Cannot get account without an account id.');

        const accountDetails = await Api.getSelf();

        if (isError(accountDetails)) {
            console.log(accountDetails.message, accountDetails.error);
            return;
        }

        if (JSON.stringify(account) != JSON.stringify(accountDetails)) {
            setAccount({
                ...account,
                ...accountDetails,
                role: parseInt(auth?.at(2) || '0'),
                loaded: true,
                authorized: true,
            });
        }
    };

    if (!account.loaded) {
        const auth = localStorage.getItem(authStorageName);

        setAccount(account => {
            const newAccount = { ...account };

            newAccount.authorized = !!auth;
            newAccount.authorizationRequired = !(unauthorizedPaths.some(unauthorizedPath => window.location.pathname.startsWith(unauthorizedPath)) || optionalAuthorization);
            newAccount.loaded = true;

            return newAccount;
        });
    }
    else if (account.authorized) {
        async function validateAuthorization(): Promise<boolean> {
            const auth = localStorage.getItem(authStorageName);

            if (!auth) {
                console.log('User is not logged in.');
                return false;
            }

            const authSplit = auth.split('::');

            const token = authSplit[0];
            const expires_at = new Date(authSplit[3]);

            if (expires_at && moment().isAfter(expires_at)) {
                console.log('User\'s login has expired.');
                return false;
            }

            const isValid = await Api.validateAuthorization(token);

            if (isError(isValid)) {
                console.log(isValid.message, isValid.error);
                return false;
            }

            return isValid;
        }

        async function tryRenewSession(): Promise<boolean> {
            const auth = localStorage.getItem(authStorageName);

            if (!auth) {
                return false;
            }

            const authSplit = auth?.split('::');

            const token = authSplit[0];
            const accountId = authSplit[1];
            const role = authSplit[2];
            const secret = authSplit[4];

            const res = await Api.renewSession(token, secret);

            if (isError(res)) {
                console.log(res.message, res.error);
                return false;
            }
            else if (!res.success) {
                console.log(res.message);
                return false;
            }
            else {
                localStorage.setItem(authStorageName, `${res.sessionToken}::${accountId}::${role}::${moment().add({ seconds: res.expiresIn - 30 })}::${res.sessionSecret}`);
                return true;
            }
        }

        validateAuthorization().then(isValid => {
            if (!isValid && !tryRenewSession()) {
                signOut();

                if (!optionalAuthorization) {
                    window.location.href = `/login${unauthorizedPaths.some(unauthorizedPath => window.location.pathname.startsWith(unauthorizedPath)) ? '' : generateQuery({ origin_path: window.location.pathname })}`;
                }
            }
        });
    }

    return (
        <AccountContext.Provider value={account}>
            {children}
        </AccountContext.Provider>
    );
};

export function useAccount(): AccountContextValue {
    return useContext(AccountContext) as AccountContextValue;
};