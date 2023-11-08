import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import moment from "moment-timezone";

import { Button, CircularProgress, Grid, Typography } from "@mui/material";

import { useNotifications } from "../Notifications/NotificationContext";

import PageContext from "../Reusables/PageContext";
import Loading from "../LoadingComponents/Loading";
import { faHome, faSmile, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NotFoundPage({ setTitle, setBackPage }: { setTitle: (title: string) => void, setBackPage: (path: string) => void }) {
    useEffect(() => {
        setTitle && setTitle("404 Page Not Found");
        setBackPage && setBackPage("Home");
    }, []);

    const { info, error, warning, success } = useNotifications();

    const [value, setValue] = useState<Date>();
    const [files, setFiles] = useState<FileList>();

    useEffect(() => {
        //success(`Value: ${value?.toString()}`);
    }, [value, files]);

    const [loaded, setLoaded] = useState(true);

    if (!loaded) {
        return (<Loading />);
    }

    return (
        <PageContext title="404 Page Not Found" titleAlignment="center"
            references={{ about: true, ToS: true, privacy: true, other: [{ name: 'Home', link: '/home', icon: faHome }] }}
        >
            <Typography variant="h1" style={{ textAlign: 'center' }}>
                <FontAwesomeIcon icon={faTimes} size="3x" style={{ color: 'red' }} />
            </Typography>
            <Typography variant="h3" style={{ textAlign: 'center' }}>
                This page does not seem to exist!
            </Typography>
            <Typography variant="h3" style={{ textAlign: 'center' }}>
                Please go somewhere else...
            </Typography>
            <Typography variant="h1" style={{ textAlign: 'center' }}>
                <FontAwesomeIcon icon={faSmile} style={{ color: '#FD2', backgroundColor: 'black', borderRadius: '5rem' }} />
            </Typography>
        </PageContext>
    );
};
