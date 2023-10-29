import { useEffect, useState, useRef } from "react";

import { DefaultInputProps } from "./Default";
import { InputElementContainer } from "../Default";
import { Checkbox, FormControl, FormControlLabel } from "@mui/material";

export type Props = DefaultInputProps & {
    type: 'checkbox',
    inputProps?: {
        style?: React.CSSProperties,
    },
    defaultValue?: boolean,
    value: boolean | undefined,
    onChange: (value: boolean | undefined) => void,
    onEnter?: (value: boolean | undefined) => void,

    labelPlacement?: 'top' | 'start' | 'end' | 'bottom',
};

export default function CheckboxInputComponent({ id, name, label, labelPlacement, inputProps, value, disabled, placeholder, onChange, isError = false, style = {} }: Omit<Props, 'type'> & { type?: 'checkbox' }) {
    return (
        <InputElementContainer style={style} hideBorder>
            <FormControl fullWidth>
                <FormControlLabel
                    className="syw-input checkbox"
                    id={id || name}
                    value={label || name}
                    label={label || name}
                    labelPlacement={labelPlacement}
                    disabled={disabled}
                    placeholder={placeholder}
                    style={{ ...style, color: isError ? 'red' : style?.color || 'white', width: '100%', height: undefined, margin: undefined }}
                    checked={value || false}
                    onChange={() => {
                        onChange(!value);
                    }}
                    control={<Checkbox className="syw-input checkbox" inputProps={inputProps} />}
                />
            </FormControl>
        </InputElementContainer>
    );
};
