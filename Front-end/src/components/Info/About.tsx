import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Grid, Typography } from "@mui/material";

import { AppName } from "../../app";
import PageContext from "../Global/Reusables/PageContext";

export default function AboutPage({ setTitle }: { setTitle: (title: string) => void }) {
    useEffect(() => {
        setTitle && setTitle(`About ${AppName}`);
    }, []);

    return (
        <PageContext title={`About ${AppName}`} references={{ ToS: true, privacy: true }}>
            <Grid className="page-content">
                <Grid className="page-item">
                    <Typography variant="subtitle1">
                        Lorem ipsum
                    </Typography>
                </Grid>
            </Grid>
        </PageContext>
    );
};
