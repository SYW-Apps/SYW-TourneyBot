import { useState } from "react";

import { DefaultProps, InputElementContainer } from "../../Default";
import { Grid, Slider } from "@mui/material";

export type Props = DefaultProps & {
    defaultValue?: number | number[],
    value: number | number[] | undefined,
    onChange: (value: number | number[] | undefined) => void,

    orientation?: 'horizontal' | 'vertical',
    valueLabelDisplay?: 'auto' | 'on' | 'off',
    valueLabelFormat?: 'auto' | 'on' | 'off',
    min?: number,
    max?: number,
    step?: number,
    scale?: (value: number) => number,


    hideBorder?: boolean,
};

export default function TextInputComponent({ name, label, min, max, step, scale, orientation, defaultValue, value, onChange, disabled, hideBorder, style = {}, valueLabelDisplay, valueLabelFormat }: Props) {
    function preventHorizontalKeyboardNavigation(event: React.KeyboardEvent) {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault();
        }
    }

    return (
        <InputElementContainer style={style} hideBorder={hideBorder}>
            <Grid style={{ width: '100%' }}>
                <Slider
                    aria-label={label || name}
                    name={name}
                    min={min}
                    max={max}
                    step={step}
                    scale={scale}
                    defaultValue={defaultValue}
                    value={value}
                    disabled={disabled}
                    onChange={(_, value) => onChange(value)}
                    valueLabelDisplay={valueLabelDisplay}
                    valueLabelFormat={valueLabelFormat}
                    orientation={orientation}
                    onKeyDown={orientation == 'vertical' ? preventHorizontalKeyboardNavigation : undefined}
                />
            </Grid>
        </InputElementContainer>
    );
};