import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Button, CircularProgress, Dialog, DialogContent, DialogTitle, Grid, Typography } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faInfo, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import { useNotifications } from "../Global/Notifications/NotificationContext";
import { Api, isError } from "../../api/api";
import { useAccount } from "../../authorization/account";

import Account from "../../models/Accounts/Account";
import PageContext from "../Global/Reusables/PageContext";
import Loading from "../Global/LoadingComponents/Loading";
import { useAPI } from "../../api/api-context";
import { usePageValues } from "../Global/ValueManager/PageValueManager";

export default function SettingsPage({ setTitle }: { setTitle: (title: string) => void }) {
    useEffect(() => {
        setTitle && setTitle("Settings");
    }, []);

    const Api = useAPI();

    const { setInitialValues, updateValues, values: { updateAccount } } = usePageValues<{ updateAccount?: Account }>();
    setInitialValues({});

    const {  } = useNotifications();

    const [loaded, setLoaded] = useState(false);

    const account = useAccount();

    useEffect(() => {
        if (updateAccount) { return; }

        setLoaded(false);

        Api.getSelf().then((account) => {
            if (isError(account)) {
                console.log(account.message, account.error);
                return;
            }

            updateValues({ updateAccount: account });

            setLoaded(true);    
        });
    }, [Api, account]);

    if (!loaded) {
        return (
            <Loading />
        );
    }

    return (
        <PageContext title="Settings">
            
        </PageContext>
    );
};
