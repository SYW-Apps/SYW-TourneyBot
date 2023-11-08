import { useState } from "react";

import { DefaultProps, InputElementContainer } from "../../Default";
import { Grid } from "@mui/material";
import { DatePicker, DateView, StaticDatePicker, StaticTimePicker, TimePicker, TimeView, renderTimeViewClock } from "@mui/x-date-pickers";

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
    views?: TimeView[],

    useClock?: boolean,
    staticMode?: boolean,
    hideBorder?: boolean,
};

export default function SYWDatePicker({ staticMode = false, useClock = true, name, label, defaultValue, value, views, orientation, disabled, hideBorder, onChange, style = {} }: Props) {
    return (
        <InputElementContainer style={style} hideBorder={hideBorder}>
            <Grid style={{ width: '100%' }}>
                {staticMode ?
                    <StaticTimePicker
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
                    <TimePicker
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