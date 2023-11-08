import { Button, Grid, TextField } from "@mui/material";
import { DefaultProps, InputElementContainer } from "../Default";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export type DefaultInputProps = DefaultProps & {
    placeholder?: string,
    onAutoFill?: () => void,
    isError?: boolean,
};

type Type = 'text' | 'text-area' | 'password' | 'number' | 'checkbox' | 'date' | 'datetime-local' | 'time' | 'file';

type Props<T> = DefaultInputProps & {
    type: Type,
    inputProps?: any,
    defaultValue?: T,
    value: T | undefined,
    onChange: (value: T | undefined) => void,
    onEnter?: (value: T | undefined) => void,

    hidden?: boolean,
    setHidden?: (hidden: boolean) => void,
}

export function SingleValueInputComponent<T>({ id, name, label, variant, type, inputProps, defaultValue, disabled, placeholder, onChange, onEnter, isError, style, onAutoFill, hidden, setHidden }: Props<T>) {
    const [inputValue, setInputValue] = useState<T | undefined>(defaultValue);
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
            <Grid style={{ display: 'inline-block', width: type == 'password' ? 'calc(100% - 64px)' : '100%' }}>
                <TextField
                    className='syw-input'
                    style={{ ...style, color: isError ? 'red' : style?.color || 'white', width: '100%', height: undefined, margin: undefined }}
                    disabled={disabled}
                    variant={variant}
                    placeholder={placeholder}
                    id={id || name}
                    label={label || name}
                    value={inputValue || ''}
                    type={type == 'password' ? (hidden ? 'password' : 'text') : type}
                    inputProps={inputProps}
                    onChange={(e) => {
                        setInputValue(e.target.value as T);
                    }}
                    onKeyDown={(e) => {
                        if (e.keyCode == 13) {
                            onEnter && onEnter(inputValue);
                        }
                    }}
                    onAnimationStart={(e) => {
                        switch (e.animationName) {
                            case 'mui-auto-fill':
                                console.log('value for input ' + (label || name || id) + ' has been autofilled.');
                                onAutoFill && onAutoFill();
                                break;
                        }
                    }}
                />
            </Grid>
            {type == 'password' ?
            <Grid style={{ display: 'inline-block', width: '64px', height: '100%', verticalAlign: 'top' }}>
                <Button variant="outlined" title={hidden ? 'Show password' : 'Hide password'}
                    style={{ backgroundColor: hidden ? 'grey' : '#2DF', color: 'black', width: '100%', padding: '20px 14px' }}
                    onClick={() => setHidden && setHidden(!hidden)}
                >
                    <FontAwesomeIcon icon={hidden ? faEyeSlash : faEye} />
                </Button>
            </Grid>
            : <></>}
        </InputElementContainer>
    );
}