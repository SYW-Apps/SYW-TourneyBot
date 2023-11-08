import Account from "../../models/Accounts/Account";

import { get, post } from "./api-utils";
import { ErrorObj, HandleError } from "./utils";

export interface AccountInfoRepo {
    getAccount(accountId: string): Promise<Account | ErrorObj>,
    getAccountName(accountId: string): Promise<{ success: boolean, message: string, value: string } | ErrorObj>,
    getAccountFirstName(accountId: string): Promise<{ success: boolean, message: string, value: string } | ErrorObj>,
    getAccountLastName(accountId: string): Promise<{ success: boolean, message: string, value: string } | ErrorObj>,
    getAccountFullName(accountId: string): Promise<{ success: boolean, message: string, value: string } | ErrorObj>,
    getAccountCountry(accountId: string): Promise<{ success: boolean, message: string, value: string } | ErrorObj>,
    getAccountState(accountId: string): Promise<{ success: boolean, message: string, value: string } | ErrorObj>,
    getAccountCity(accountId: string): Promise<{ success: boolean, message: string, value: string } | ErrorObj>,
    getAccountAddress(accountId: string): Promise<{ success: boolean, message: string, value: string } | ErrorObj>,
    getAccountZipCode(accountId: string): Promise<{ success: boolean, message: string, value: string } | ErrorObj>,
}

export default {
    async getAccount(accountId: string): Promise<Account | ErrorObj> {
        try
        {
            const res = await get(`/api/account/info/${accountId}`);

            const data = res.data as Account;

            return data || HandleError(res);
        }
        catch (e)
        {
            return HandleError(e);
        }
    },

    async getAccountName(accountId: string): Promise<{ success: boolean, message: string, value: string } | ErrorObj> {
        try
        {
            const res = await get(`/api/account/info/username`, { id: accountId });

            const data = res.data as { success: boolean, message: string, value: string };

            return data || HandleError(res);
        }
        catch (e)
        {
            return HandleError(e);
        }
    },

    async getAccountFirstName(accountId: string): Promise<{ success: boolean, message: string, value: string } | ErrorObj> {
        try
        {
            const res = await get(`/api/account/info/firstName`, { id: accountId });

            const data = res.data as { success: boolean, message: string, value: string };

            return data || HandleError(res);
        }
        catch (e)
        {
            return HandleError(e);
        }
    },

    async getAccountLastName(accountId: string): Promise<{ success: boolean, message: string, value: string } | ErrorObj> {
        try
        {
            const res = await get(`/api/account/info/lastName`, { id: accountId });

            const data = res.data as { success: boolean, message: string, value: string };

            return data || HandleError(res);
        }
        catch (e)
        {
            return HandleError(e);
        }
    },

    async getAccountFullName(accountId: string): Promise<{ success: boolean, message: string, value: string } | ErrorObj> {
        try
        {
            const res = await get(`/api/account/info/fullName`, { id: accountId });

            const data = res.data as { success: boolean, message: string, value: string };

            return data || HandleError(res);
        }
        catch (e)
        {
            return HandleError(e);
        }
    },

    async getAccountCountry(accountId: string): Promise<{ success: boolean, message: string, value: string } | ErrorObj> {
        try
        {
            const res = await get(`/api/account/info/country`, { id: accountId });

            const data = res.data as { success: boolean, message: string, value: string };

            return data || HandleError(res);
        }
        catch (e)
        {
            return HandleError(e);
        }
    },

    async getAccountState(accountId: string): Promise<{ success: boolean, message: string, value: string } | ErrorObj> {
        try
        {
            const res = await get(`/api/account/info/state`, { id: accountId });

            const data = res.data as { success: boolean, message: string, value: string };

            return data || HandleError(res);
        }
        catch (e)
        {
            return HandleError(e);
        }
    },

    async getAccountCity(accountId: string): Promise<{ success: boolean, message: string, value: string } | ErrorObj> {
        try
        {
            const res = await get(`/api/account/info/city`, { id: accountId });

            const data = res.data as { success: boolean, message: string, value: string };

            return data || HandleError(res);
        }
        catch (e)
        {
            return HandleError(e);
        }
    },

    async getAccountAddress(accountId: string): Promise<{ success: boolean, message: string, value: string } | ErrorObj> {
        try
        {
            const res = await get(`/api/account/info/address`, { id: accountId });

            const data = res.data as { success: boolean, message: string, value: string };

            return data || HandleError(res);
        }
        catch (e)
        {
            return HandleError(e);
        }
    },

    async getAccountZipCode(accountId: string): Promise<{ success: boolean, message: string, value: string } | ErrorObj> {
        try
        {
            const res = await get(`/api/account/info/zipCode`, { id: accountId });

            const data = res.data as { success: boolean, message: string, value: string };

            return data || HandleError(res);
        }
        catch (e)
        {
            return HandleError(e);
        }
    },
}