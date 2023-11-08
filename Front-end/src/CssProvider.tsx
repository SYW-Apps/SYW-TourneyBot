import { createContext, useContext, useEffect, useState } from "react";

import { CssBaseline, Grid, Typography } from "@mui/material";
import { useSYWTheme } from "./components/Global/Themes/SYW-Theme";

type CssContextValue = { cssLoaded: boolean, cssFile?: string, pageTooSmall: boolean, fail: boolean };

const CssContext = createContext<CssContextValue>({ cssLoaded: false, cssFile: '/css/desktop/landscape-dark.css', pageTooSmall: false, fail: false });

export function CssProvider({ children }: { children?: any }) {
    const [cssContext, setCssContext] = useState<CssContextValue>({ cssLoaded: false, cssFile: '/css/desktop/landscape-dark.css', pageTooSmall: false, fail: false });

    const { renderMobile, darkMode, width, height } = useSYWTheme();

    const [cssTitle] = useState('page-css');

    useEffect(() => {
        const aspectRatio = calculateAspectRatio(width, height);

        if (!aspectRatio) {
            setCssContext({ cssLoaded: true, pageTooSmall: true, fail: false });
        }
        else {
            console.log(`Using css file:\n${cssContext.cssFile}.`);

            setCssContext({ cssLoaded: false, cssFile: `/css/${renderMobile ? 'mobile' : 'desktop'}/${aspectRatio.orientation}-${darkMode ? 'dark' : 'light'}.css`, pageTooSmall: false, fail: false });
        }
    }, [renderMobile, darkMode, width, height]);

    useEffect(() => {
        if (!cssContext.fail && !cssContext.pageTooSmall && !cssContext.cssLoaded) {
            function checkStyleSheets(attempt: number = 0): NodeJS.Timeout | undefined {
                if (attempt == 40) {
                    console.log(`Failed to load css file after ${40 * 250}ms`)
                    setCssContext(context => { return { ...context, fail: true }; });
                    return;
                }
                else if (document.styleSheets[document.styleSheets.length - 1].title == cssTitle) {
                    setCssContext(context => { return { ...context, cssLoaded: true }; });
                    return;
                }
                else {
                    return setTimeout(() => checkStyleSheets(attempt + 1), 250);
                }
            };

            const timeoutId = checkStyleSheets();

            return () => timeoutId && clearTimeout(timeoutId);
        }
    }, [cssContext]);

    return (
        <CssContext.Provider value={cssContext}>
            <CssBaseline />
            <link title={cssTitle} rel="stylesheet" type="text/css" href={cssContext.cssFile} />

            {cssContext.pageTooSmall ?
            <Grid style={{ display: 'flex', position: 'fixed', width: width, height: height, justifyContent: 'center', top: 0, left: 0, backgroundColor: 'rgba(255, 255, 255, 0.5)', textAlign: 'center', zIndex: 9999 }}>
                <Typography variant="h2" style={{ margin: 'auto' }}>SCREEN TOO SMALL</Typography>
            </Grid>
            : cssContext.fail ?
            <Grid style={{ display: 'flex', position: 'fixed', width: width, height: height, justifyContent: 'center', top: 0, left: 0, backgroundColor: 'rgba(255, 255, 255, 0.5)', textAlign: 'center', zIndex: 9999 }}>
                <Typography variant="h2" style={{ margin: 'auto' }}>FAILED TO LOAD</Typography>
            </Grid>
            :children}
        </CssContext.Provider>
    );
};

export function useCssContext() {
    return useContext(CssContext) as CssContextValue;
}

const availableAspectRatios = [[16,9,16/9], [1,1,1], [9,16,9/16]];

function calculateAspectRatio(pageWidth: number, pageHeight: number): { width: number, height: number, orientation: string } | undefined {
    if (pageWidth < 300 || pageHeight < 300) { return undefined; }

    const aspectRatio = pageWidth / pageHeight;

    const closestAspectRatio = availableAspectRatios.reduce((prev, ar) => {
        return (Math.abs(ar[2] - aspectRatio) < Math.abs(prev[2] - aspectRatio) ? ar : prev);
    });

    return { width: closestAspectRatio[0], height: closestAspectRatio[1], orientation: closestAspectRatio[0] > closestAspectRatio[1] ? 'landscape' : closestAspectRatio[0] < closestAspectRatio[1] ? 'portrait' : 'square' };
}
