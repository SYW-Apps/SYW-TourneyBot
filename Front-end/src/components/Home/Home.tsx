import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import moment from "moment-timezone";

import { Button, CircularProgress, Grid, Typography } from "@mui/material";

import { useNotifications } from "../Global/Notifications/NotificationContext";
import { Api } from "../../api/api";

import PageContext from "../Global/Reusables/PageContext";
import Loading from "../Global/LoadingComponents/Loading";
import InputComponent from "../Global/InputComponents/SingleValueInputComponents/Index";
import SYWDatePicker from "../Global/InputComponents/DedicatedInputComponents/DateTime/DatePicker";
import SYWLocalizationProvider from "../Global/InputComponents/DedicatedInputComponents/DateTime/SYWLocalizationProvider";
import SYWTimePicker from "../Global/InputComponents/DedicatedInputComponents/DateTime/TimePicker";

export default function HomePage({ setTitle, setBackPage }: { setTitle: (title: string) => void, setBackPage: (path: string) => void }) {
    useEffect(() => {
        setTitle && setTitle("Home");
        setBackPage && setBackPage("");
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
        <PageContext title="Home"
            sideBar={[
                <Grid key={1} className="syw-container center">
                    <Typography key={1} variant="h3">Sidebar</Typography>
                </Grid>,
                <Grid key={2} className="syw-container center">
                    <Button
                        className="syw-button default bordered w-100 h-100"
                    >
                        <Typography variant="h6">Sidebar button</Typography>
                    </Button>
                </Grid>,
            ]}
        >
            
        </PageContext>
    );
};
