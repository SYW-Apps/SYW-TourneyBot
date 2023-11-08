import { useState } from "react";

import { DefaultProps, InputElementContainer } from "../../Default";
import { Grid, useTheme } from "@mui/material";
import { DatePicker, DateView, StaticDatePicker } from "@mui/x-date-pickers";

export type Props = {
    name?: string,
    label?: string,
    inputProps?: {
        style?: React.CSSProperties,
    },
    style?: React.CSSProperties,
    disabled?: boolean,
    defaultValue?: Date,
    value: Date | undefined,
    onChange: (value: Date | undefined) => void,

    orientation?: 'landscape' | 'portrait',
    views?: DateView[],

    staticMode?: boolean,
    hideBorder?: boolean,
};

export default function SYWDatePicker({ staticMode = false, name, label, defaultValue, value, views, orientation, disabled, hideBorder, onChange, style = {} }: Props) {

    
    return (
        <InputElementContainer style={style} hideBorder={hideBorder}>
            <Grid style={{ width: '100%' }}>
                {staticMode ?
                    <StaticDatePicker
                        className="syw-input"
                        defaultValue={defaultValue}
                        value={value || null}
                        onChange={(value) => onChange(value || undefined)}
                        disabled={disabled}
                        orientation={orientation}
                        views={views}
                        sx={{
                            color: 'white'
                        }}
                    /> :
                    <DatePicker
                        className="syw-input"
                        label={label || name}
                        defaultValue={defaultValue}
                        value={value}
                        onChange={(value) => onChange(value || undefined)}
                        disabled={disabled}
                        orientation={orientation}
                        views={views}
                    />}
            </Grid>
        </InputElementContainer>
    );
};