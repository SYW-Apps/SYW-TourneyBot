import { useEffect } from "react";

import { DefaultInputProps, SingleValueInputComponent } from "./Default";

export type Props = DefaultInputProps & {
    type: 'number',
    inputProps?: {
        style?: React.CSSProperties,
        step?: number,
        min?: number,
        max?: number,
    },
    defaultValue?: number,
    value: number | undefined,
    onChange: (value: number | undefined) => void,
    onEnter?: (value: number | undefined) => void,
};

export default function NumberInputComponent({ id, name, label, variant = "outlined", type = 'number', inputProps, defaultValue, value, disabled, placeholder, onChange, onEnter, isError = false, style = {}, onAutoFill }: Omit<Props, 'type'> & { type?: 'number' }) {
    return (
        <SingleValueInputComponent
            id={id}
            name={name}
            label={label}
            placeholder={placeholder}
            variant={variant}
            style={style}
            type={type}
            disabled={disabled}
            inputProps={inputProps}
            defaultValue={defaultValue}
            value={value}
            onChange={(value) => {
                if (value && inputProps?.step && inputProps?.step === 1.00 && value % 1 !== 0) {
                    let correction = parseInt((value + 0.50).toString());
                    if (correction === 0) {
                        correction = 1;
                    }
                    
                    if (correction != value as number) {
                        value = correction;
                    }
                }

                onChange(value);
            }}
            onEnter={onEnter}
            isError={isError}
            onAutoFill={onAutoFill}
        />
    );
};