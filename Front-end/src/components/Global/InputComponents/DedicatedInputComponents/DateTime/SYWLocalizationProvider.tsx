import { useState } from "react";

import { InputElementContainer } from "../../Default";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

export default function SYWLocalizationProvider({ children }: { children: any }) {
    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            {children}
        </LocalizationProvider>
    );
};