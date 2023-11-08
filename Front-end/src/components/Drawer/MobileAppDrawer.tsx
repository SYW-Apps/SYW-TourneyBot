import { useState } from "react";

import { Button, Grid, ListItemButton, ListItemText } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faCog, faHome, faSignInAlt, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";

import DrawerItem from "./MobileDrawerItem";

import { optionalAuthorization, useAccount } from "../../authorization/account";

function MobileAppDrawer({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) {
    
    const { authorized, role, signOut } = useAccount();
    
    return (
        <Grid
            className={`syw-drawer${open ? ' open' : ''}`}
        >
            <Button className="syw-drawer-header" onClick={() => setOpen(!open)}>
                <Grid className="syw-drawer-header-icon-container">
                    <Grid className="syw-drawer-header-chevron-icon">
                        {open ?
                        <FontAwesomeIcon icon={faChevronDown} size='1x' /> :
                        <FontAwesomeIcon icon={faChevronUp} size='1x' />}
                    </Grid>
                </Grid>
            </Button>
            <Grid className="syw-drawer-content">
                <Grid className="syw-drawer-content-section">
                    {!optionalAuthorization && !authorized ?
                    <>
                        <Grid className="syw-drawer-content-section-header">
                            <i>Not logged in</i>
                        </Grid>
                        <Grid className="syw-drawer-content-group">
                            <DrawerItem icon={faSignInAlt} link="/login" text="Login Here" />
                        </Grid>
                    </> :
                    <>
                        <Grid className="syw-drawer-content-section-header">
                            <i>Main</i>
                        </Grid>
                        <Grid className="syw-drawer-content-group">
                            <DrawerItem icon={faHome} link="/home" text="Home" />
                        </Grid>
                    </>}
                </Grid>
                {role >= 1 ?
                <Grid className="syw-drawer-content-section">
                    <Grid className="syw-drawer-content-section-header">
                        <i>Admin</i>
                    </Grid>
                    <Grid className="syw-drawer-content-group">
                        <DrawerItem icon={faHome} link="/admin" text="Admin" />
                    </Grid>
                </Grid>
                : <></>}
                <Grid className="syw-drawer-content-section">
                    <Grid className="syw-drawer-content-section-header">
                        <i>Options</i>
                    </Grid>
                    <Grid className="syw-drawer-content-group">
                        <DrawerItem icon={faCog} link="/settings" text="Settings" />
                        {authorized ?
                        <>
                            <DrawerItem icon={faUser} link="/myaccount" text="My Account" />
                            <Grid className="syw-drawer-item-container">
                                <Grid className="syw-drawer-item">
                                    <Button className="syw-button warning w-100"
                                        onClick={() => signOut()}
                                    >
                                        <FontAwesomeIcon icon={faSignOutAlt} className="text-icon" />
                                        Logout
                                    </Button>
                                </Grid>
                            </Grid>
                        </> :
                        <>
                            <DrawerItem icon={faSignInAlt} link="/login" text="Login" />
                        </>}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export { MobileAppDrawer };