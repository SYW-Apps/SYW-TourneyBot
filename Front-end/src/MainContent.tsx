import { Route, Routes } from "react-router-dom";

import clsx from 'clsx';

import { useAccount } from "./authorization/account";

import { useSYWTheme } from "./components/Global/Themes/SYW-Theme";

import { Grid } from "@mui/material";

import Footer from "./Footer";

import LoginPage from "./components/Login/Login";
import HomePage from "./components/Home/Home";
import AboutPage from "./components/Info/About";
import PrivacyPage from "./components/Info/Privacy";
import SettingsPage from "./components/Settings/Settings";
import ToSPage from "./components/Info/ToS";

import NotFoundPage from "./components/Global/Errors/PageNotFound";

export default function MainContent({ drawerOpen, toolbarOpen, setTitle, setBackPage }: { drawerOpen: boolean, toolbarOpen: boolean, setTitle: (title: string) => void, setBackPage: (path: string) => void }) {
    const { renderMobile } = useSYWTheme();

    const routes: { path: string, component: React.ReactElement, minRequiredRole?: number }[] = [
        { path: "/login", component: <LoginPage setTitle={setTitle}/> },
        { path: "/about", component: <AboutPage setTitle={setTitle}/> },
        { path: "/ToS", component: <ToSPage setTitle={setTitle} /> },
        { path: "/privacy", component: <PrivacyPage setTitle={setTitle} /> },

        { path: "/home", component: <HomePage setBackPage={setBackPage} setTitle={setTitle}/>, minRequiredRole: 0 },
        { path: "/settings", component: <SettingsPage setTitle={setTitle} />, minRequiredRole: 0 },
    ];

    const account = useAccount();
    
    return (
        <Grid style={{ height: toolbarOpen ? 'calc(100% - 64px)' : '100%', marginTop: toolbarOpen ? '64px' : '0px' }}>
            <main className="hide-scrollbar">
                <Grid className={clsx({
                        'content': true,
                        'content-shift': !renderMobile && drawerOpen,
                    })}
                >
                    <Grid className="page-container">
                        <Routes>
                            {routes.filter(route => {
                                return !route.minRequiredRole || account.role >= route.minRequiredRole;
                            }).map((route, index) => {
                                return (
                                    <Route key={`route-${index}`} path={route.path} element={route.component} />
                                );
                            })}
                            <Route path="*" element={<NotFoundPage setTitle={setTitle} setBackPage={setBackPage} />} />
                        </Routes>
                        <Grid className='footer-content-spacing' />
                    </Grid>
                    <Footer />
                </Grid>
            </main>
        </Grid>
    );
};