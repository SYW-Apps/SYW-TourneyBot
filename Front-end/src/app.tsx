import { useEffect, useState } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

import moment from "moment";

import clsx from "clsx";

import { Grid, Button, IconButton, Typography, Toolbar, AppBar } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCog } from "@fortawesome/free-solid-svg-icons";

import { ApiProvider } from "./api/api-context";
import { AccountProvider, optionalAuthorization, useAccount } from "./authorization/account";
import { CssProvider, useCssContext } from "./CssProvider";
import { SYWThemeProvider, useSYWTheme } from "./components/Global/Themes/SYW-Theme";
import { NotificationProvider } from "./components/Global/Notifications/NotificationContext";

import MainContent from "./MainContent";
import { MobileAppDrawer } from "./components/Drawer/MobileAppDrawer";
import { AppDrawer } from "./components/Drawer/AppDrawer";
import Loading from "./components/Global/LoadingComponents/Loading";
import ConfigPanel from "./ConfigPanel";
import { PageValueProvider } from "./components/Global/ValueManager/PageValueManager";

export const AppName = "Application Name";

export default function App() {
    return (
        <>
            <PageValueProvider>
                <SYWThemeProvider>
                    <CssProvider>
                        <ApiProvider>
                            <AccountProvider>
                                <NotificationProvider>
                                    <Router>
                                        <AppShell />
                                    </Router>
                                </NotificationProvider>
                            </AccountProvider>
                        </ApiProvider>
                    </CssProvider>
                </SYWThemeProvider>
            </PageValueProvider>
        </>
    );
};

function AppShell() {
    
    const account = useAccount();

    const { renderMobile, darkMode, setDarkMode, width, height } = useSYWTheme();
    const css = useCssContext();

    const [title, setTitle] = useState("");
    const [backPage, setBackPage] = useState('');

    const [toolbarOpen, setToolbarOpen] = useState(true);
    const [drawerOpen, setDrawerOpen] = useState(!renderMobile);

    const [configPanelOpen, setConfigPanelOpen] = useState(false);

    useEffect(() => {
        document.title = `${title} - ${AppName}`;
    }, [title]);

    useEffect(() => {
        if (renderMobile && drawerOpen) {
            setTimeout(() => setDrawerOpen(false), 95);
        }
    }, [window.location.pathname]);

    useEffect(() => {
        setDrawerOpen(!renderMobile);
    }, [renderMobile]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const isLoading = !account.loaded || !css.cssLoaded;

        if (loading != isLoading) {
            setLoading(isLoading);
        }
    }, [account, css]);

    if (loading) {
        return (<Loading />);
    }

    return (
        <>
            <AppBar
                position="fixed"
                className={clsx({
                    'app-bar': true,
                    'app-bar-shift': !renderMobile && drawerOpen,
                    'app-bar-hidden': !toolbarOpen,
                })}
            >
                <Toolbar className="toolbar">
                    <Grid className="toolbar-content-left-container hide-scrollbar">
                        <Grid className="toolbar-content-left">
                            <IconButton onClick={() => setDrawerOpen(!drawerOpen)}
                                color="inherit"
                                edge="start"
                                className='toolbar-item text-icon'
                            >
                                <img className="app-bar-home-icon" src="/images/logo/SYW_Logo_icon_192.png" height="35" width="35"></img>
                            </IconButton>
                            <Grid className="toolbar-item toolbar-title">
                                <Typography variant="h6" noWrap className='title'>{title}</Typography>
                                {backPage &&
                                <Link className="backpage-button title" to={backPage} title="back to previous page">
                                    <Button className="backpage-button">
                                        <Typography variant="h6" noWrap><FontAwesomeIcon icon={faArrowLeft} size="1x" className="text-icon" />Back</Typography>
                                    </Button>
                                </Link>}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className="toolbar-content-right-container">
                        <Grid className="toolbar-content-right">
                            {account.username ?
                            <Grid className="toolbar-item">
                                <Typography variant="subtitle2">{account.username}</Typography>
                            </Grid> : <></>}
                            <Grid className="toolbar-item">
                                <Button
                                    className='config-button'
                                    onClick={() => setConfigPanelOpen(!configPanelOpen)}
                                >
                                    <FontAwesomeIcon icon={faCog} size="2x"/>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <ConfigPanel open={configPanelOpen} onClose={() => setConfigPanelOpen(false)} />
            {account.authorized ?
                <></> :
                <>
                {renderMobile ?
                    <MobileAppDrawer
                        open={drawerOpen}
                        setOpen={setDrawerOpen}
                    />
                    :
                    <AppDrawer
                        open={drawerOpen}
                        setOpen={setDrawerOpen}
                    />
                }
                </>}

            <MainContent
                drawerOpen={drawerOpen}
                toolbarOpen={toolbarOpen}
                setTitle={setTitle}
                setBackPage={setBackPage}
            />
        </>
    );
};