import { Typography, IconButton, Divider, List, useTheme, Button, ListItemText, ListItem, ListItemButton, Grid } from "@mui/material";

import { faChevronLeft, faChevronRight, faCog, faCogs, faHome, faSignInAlt, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";

import DrawerItem from "./DrawerItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SYWDrawer from "./SYWDrawer";
import { optionalAuthorization, useAccount } from "../../authorization/account";
import { AppName } from "../../app";

function AppDrawer({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) {
    const theme = useTheme();

    const { authorized, role, signOut } = useAccount();

    return (
        <SYWDrawer
            variant="persistent"
            anchor="left"
            open={open}
        >
            <Grid className="syw-drawer-header">
                <Typography variant="h5" noWrap className="syw-drawer-header-title">
                    {AppName}
                </Typography>
                <Grid className="syw-drawer-header-icon-container">
                    <IconButton onClick={() => setOpen(false)} className="syw-drawer-header-chevron-icon">
                        {
                            theme.direction === 'ltr' ? (
                                <FontAwesomeIcon icon={faChevronLeft} size="xs" />
                            ) : (
                                <FontAwesomeIcon icon={faChevronRight} size="xs" />
                            )
                        }
                    </IconButton>
                </Grid>
            </Grid>
            <Grid className="syw-drawer-content">
                {!optionalAuthorization && !authorized ?
                <List>
                    <i className="syw-drawer-item-group-title">Not logged in</i>
                    <DrawerItem icon={faSignInAlt} link="/login" text="Login Here" />
                </List> :
                <List>
                    <Grid>
                        <i className="syw-drawer-item-group-title">Main</i>
                        <DrawerItem icon={faHome} link="/home" text="Home" />
                    </Grid>
                </List>}
                {role >= 1 ?
                    <>
                        <Divider className="syw-drawer-item-group-divider" />
                        <List>
                            <i className="syw-drawer-item-group-title">Admin</i>
                            <DrawerItem icon={faCogs} link="/admin" text="Admin" />
                        </List>
                    </>
                : <></>}
            </Grid>
            <Grid className="syw-drawer-footer">
                <List>
                    <Grid>
                        <DrawerItem icon={faCog} link="/settings" text="Settings" />
                        {authorized ?
                        <>
                            <DrawerItem icon={faUser} link="/myaccount" text="My Account" />
                            <ListItemButton component={Button} onClick={() => signOut()} className="syw-drawer-item warning">
                                <FontAwesomeIcon icon={faSignOutAlt} size="lg" className="text-icon" /><Typography variant="subtitle1"><b>Logout</b></Typography>
                            </ListItemButton>
                        </> :
                        <>
                            <DrawerItem icon={faSignInAlt} link="/login" text="Login" />
                        </>}
                    </Grid>
                </List>
            </Grid>
        </SYWDrawer>
    );
};

export { AppDrawer };