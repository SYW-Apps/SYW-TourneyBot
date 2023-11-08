import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Grid, Typography } from "@mui/material";

import { AppName } from "../../app";
import PageContext from "../Global/Reusables/PageContext";

export default function ToSPage({ setTitle }: { setTitle: (title: string) => void }) {
    useEffect(() => {
        setTitle && setTitle(`About ${AppName}`);
    }, []);

    return (
        <PageContext title="Terms of Service" references={{ about: true, privacy: true }}>
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
