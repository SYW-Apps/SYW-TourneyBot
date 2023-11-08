import { useState } from "react";

import { DefaultProps, InputElementContainer } from "../../Default";
import { Grid, useTheme } from "@mui/material";
import { DateOrTimeView, DatePicker, DateTimePicker, DateView, StaticDatePicker, StaticDateTimePicker, renderTimeViewClock } from "@mui/x-date-pickers";

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
    views?: DateOrTimeView[],

    useClock?: boolean,
    staticMode?: boolean,
    hideBorder?: boolean,
};

export default function SYWDateTimePicker({ staticMode = false, useClock = true, name, label, defaultValue, value, views, orientation, disabled, hideBorder, onChange, style = {} }: Props) {
    console.log(useTheme().palette.mode);
    return (
        <InputElementContainer style={style} hideBorder={hideBorder}>
            <Grid style={{ width: '100%' }}>
                {staticMode ?
                    <StaticDateTimePicker
                        className="syw-input"
                        defaultValue={defaultValue}
                        value={value}
                        onChange={(value) => onChange(value || undefined)}
                        disabled={disabled}
                        orientation={orientation}
                        views={views}
                        viewRenderers={{
                            hours: useClock ? renderTimeViewClock : undefined,
                            minutes: useClock ? renderTimeViewClock : undefined,
                            seconds: useClock ? renderTimeViewClock : undefined,
                        }}
                    /> :
                    <DateTimePicker
                        className="syw-input"
                        label={label || name}
                        defaultValue={defaultValue}
                        value={value}
                        onChange={(value) => onChange(value || undefined)}
                        disabled={disabled}
                        orientation={orientation}
                        views={views}
                        viewRenderers={{
                            hours: useClock ? renderTimeViewClock : undefined,
                            minutes: useClock ? renderTimeViewClock : undefined,
                            seconds: useClock ? renderTimeViewClock : undefined,
                        }}
                    />}
            </Grid>
        </InputElementContainer>
    );
};