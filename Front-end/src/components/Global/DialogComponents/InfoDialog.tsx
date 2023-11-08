import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Button, Grid, Dialog, DialogTitle, DialogContent } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default function InfoDialog({ show, title, content, backgroundColor, onClose, onButtonClick, buttonText, buttonIcon, buttonColor, buttonBorderColor }: { show: boolean, title: string, content: React.ReactElement | string, backgroundColor?: string, onClose: (e?: {}, reason?: any) => void, onButtonClick: () => void, buttonText?: string, buttonIcon?: IconProp, buttonColor?: string, buttonBorderColor?: string }) {

    return (
        <Dialog open={show} onClose={(e, reason) => onClose(e, reason)} style={{ backgroundColor: backgroundColor }} >
            <DialogTitle style={{ backgroundColor: backgroundColor, color: 'black' }}>{title}</DialogTitle>
            <DialogContent style={{ backgroundColor: backgroundColor, color: 'black' }}>
                <Grid style={{ width: '100%', height: '100%', overflowY: 'auto' }}>
                    <Grid style={{ width: '100%', marginBottom: '10px' }}>
                        {content}
                    </Grid>
                    <Grid style={{ width: '100%', height: '20%' }}>
                        <Button variant="outlined"
                            style={{ backgroundColor: buttonColor || '#FD4', borderColor: buttonBorderColor || '#FD4', textTransform: 'none', marginRight: '10px' }}
                            onClick={() => { onButtonClick(); }}
                        >
                            {buttonText || 'OK'} <FontAwesomeIcon icon={buttonIcon || faCheck} style={{ marginLeft: '5px' }} />
                        </Button>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
};