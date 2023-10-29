import { useEffect, useState, useRef } from "react";

import { Grid } from "@mui/material";

import { Props as TextInputProps } from "./TextInputComponent";
import { InputElementContainer } from "../Default";

export type Props = Omit<TextInputProps, 'type'> & { type: 'text-area' };

export default function TextAreaInputComponent({ id, name, defaultValue, value, disabled, placeholder, onChange, onEnter, isError = false, style = {} }: Omit<Props, 'type'> & { type?: 'text-area' }) {
    
    const [inputValue, setInputValue] = useState<typeof value>(defaultValue);
    const isInitialRun = useRef(false);

    useEffect(() => {
        if (isInitialRun.current) {
            const timeoutId = setTimeout(() => onChange(inputValue), 500);
            return () => clearTimeout(timeoutId);
        } else {
            isInitialRun.current = true;
        }
    }, [inputValue])

    return (
        <InputElementContainer style={style}>
            <Grid style={{ display: 'inline-block', width: '100%' }}>
                <textarea
                    style={{ display: 'inline-block', backgroundColor: '#111', ...style, color: isError ? 'red' : style?.color || 'white', width: '100%', height: undefined, margin: undefined }}
                    disabled={disabled}
                    placeholder={placeholder}
                    id={id || name}
                    value={inputValue || ''}
                    onChange={(e) => {
                        setInputValue(e.currentTarget.value);
                    }}
                    onKeyDown={(e) => {
                        if (e.keyCode == 13) {
                            onEnter && onEnter(inputValue);
                        }
                    }}
                />
            </Grid>
        </InputElementContainer>
    );
};