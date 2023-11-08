import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Grid, Typography } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";

import { useNotifications } from "../Global/Notifications/NotificationContext";
import { Api } from "../../api/api";
import { AppName } from "../../app";
import PageContext from "../Global/Reusables/PageContext";
import { useAPI } from "../../api/api-context";

export default function LoginPage({ setTitle }: { setTitle: (title: string) => void }) {
    useEffect(() => {
        setTitle && setTitle(`Login`);
    }, []);

    const { error, warning } = useNotifications();

    const [errorMessage, setErrorMessage] = useState<string>();
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);

        const error = params.get('error');

        if (error) {
            warning(error);
            setErrorMessage(error);
        }
        else {
            window.location.href = `/api/login${window.location.search}`;
        }
    }, []);

    return (
        <PageContext title={"Login" + (errorMessage ? ' has failed!' : '')} returnButtonUrl="/home" references={{ about: true, privacy: true, ToS: true }}>
            <Typography variant="subtitle1">{errorMessage || 'Unknown error.'}</Typography>
        </PageContext>
    );
};
