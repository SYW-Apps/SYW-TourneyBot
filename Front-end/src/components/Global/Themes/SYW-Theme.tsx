import { createContext, useContext, useEffect, useState } from "react";

import { createTheme, Theme, ThemeProvider } from "@mui/material";

type SYWThemeContextValue = { renderMobile: boolean, setRenderMobile: (value: boolean) => void, darkMode: boolean, setDarkMode: (value: boolean) => void, darkModeUseSystem: boolean, setDarkModeUseSystem: (value: boolean) => void, width: number, height: number, theme: Theme };

const SYWThemeContext = createContext<SYWThemeContextValue | undefined>(undefined);

function createMuiTheme(darkMode: boolean): Theme {
    return createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: {
                light: '#222',
                dark: '#EEE',
                main: '#2DF',
            },
            secondary: {
                light: '#121212',
                dark: '#FFF',
                main: '#4DF',
            },
            error: {
                main: '#F24',
            },
            warning: {
                main: '#DF4',
            },
            success: {
                main: '#2F4',
            },
        },
        components: {
            MuiMenu: {
                styleOverrides: {
                    list: {
                        backgroundColor: '#222',
                    }
                }
            },
            MuiSelect: {
                styleOverrides: {
                    select: {
                        color: darkMode ? 'white' : 'black',
                        '& label': {
                            color: darkMode ? 'white' : 'black',
                        },
                        '& input': {
                            color: darkMode ? 'white' : 'black',
                            borderColor: 'black',
                        },
                        '& .Mui-focused': {
                            color: '#2DF',
                            '& > fieldset': {
                                borderColor: '#2DF!important',
                            },
                        },
                        '& .MuiInputBase-root': {
                            width: '100%'
                        },
                        '& .Mui-disabled': {
                            color: darkMode ? 'white' : 'black',
                            WebkitTextFillColor: darkMode ? 'white' : 'black',
                        },
                    },
                    icon: {
                        color: darkMode ? 'white' : 'black',
                    }
                }
            },
        }
    });
}

export function SYWThemeProvider({ children }: { children: any }) {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [renderMobile, setRenderMobile] = useState(false);
    const [darkMode, setDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
    const [darkModeUseSystem, setDarkModeUseSystem] = useState(true);

    const [themeContext, setThemeContext] = useState<SYWThemeContextValue>({ renderMobile: false, setRenderMobile, darkMode, setDarkMode, darkModeUseSystem, setDarkModeUseSystem, width: 1920, height: 1080, theme: createMuiTheme(darkMode) });
    
    useEffect(() => {
        setThemeContext({
            renderMobile,
            setRenderMobile,
            darkMode,
            setDarkMode,
            darkModeUseSystem,
            setDarkModeUseSystem,
            width,
            height,
            theme: createMuiTheme(darkMode),
        });
    }, [renderMobile, darkMode, darkModeUseSystem, width, height]);

    useEffect(() => {
        function onPageChanged() {
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
            console.log(`Loading ${isMobile ? 'Mobile' : 'Desktop'}, ${window.innerWidth}x${window.innerHeight}.`);
            setRenderMobile(isMobile);
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        window.addEventListener('load', () => onPageChanged());
        window.addEventListener('resize', () => onPageChanged());

        return () => {
            window.removeEventListener('load', () => onPageChanged());
            window.removeEventListener('resize', () => onPageChanged());
        };
    }, []);

    useEffect(() => {
        if (darkModeUseSystem) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addEventListener('change', e => {
                if (darkModeUseSystem) {
                    setDarkMode(e.matches);
                }
            });
            setDarkMode(mediaQuery.matches);

            return () => {
                mediaQuery.removeEventListener('change', e => {
                    if (darkModeUseSystem) {
                        setDarkMode(e.matches);
                    }
                });
            };
        }
    }, [darkModeUseSystem]);

    return (
        <SYWThemeContext.Provider value={themeContext}>
            <ThemeProvider theme={themeContext?.theme}>
                {children}
            </ThemeProvider>
        </SYWThemeContext.Provider>
    );
};

export function useSYWTheme(): SYWThemeContextValue {
    return useContext(SYWThemeContext) as SYWThemeContextValue;
};