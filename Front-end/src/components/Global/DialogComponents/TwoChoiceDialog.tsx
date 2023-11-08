import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Button, Grid, Dialog, DialogTitle, DialogContent } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default function TwoChoiceDialog({ show, title, content, backgroundColor, onClose, onChoice1, onChoice2, choice1Text, choice2Text, choice1Icon, choice2Icon, choice1Color, choice2Color, choice1BorderColor, choice2BorderColor }: { show: boolean, title: string, content: React.ReactElement | string, backgroundColor?: string, onClose: (e?: {}, reason?: any) => void, onChoice1: () => void, onChoice2: () => void, choice1Text?: string, choice2Text?: string, choice1Icon?: IconProp, choice2Icon?: IconProp, choice1Color?: string, choice2Color?: string, choice1BorderColor?: string, choice2BorderColor?: string }) {

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
                            style={{ backgroundColor: choice1Color || '#FD4', borderColor: choice1BorderColor || '#FD4', textTransform: 'none', marginRight: '10px' }}
                            onClick={() => { onChoice1(); }}
                        >
                            {choice1Text || 'Yes'} <FontAwesomeIcon icon={choice1Icon || faCheck} style={{ marginLeft: '5px' }} />
                        </Button>
                        <Button variant="outlined"
                            style={{ backgroundColor: choice2Color || '#2DF', borderColor: choice2BorderColor || '#2DF', textTransform: 'none' }}
                            onClick={() => { onChoice2(); }}
                        >
                            {choice2Text || 'No'} <FontAwesomeIcon icon={choice2Icon || faTimes} style={{ marginLeft: '5px' }} />
                        </Button>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
};