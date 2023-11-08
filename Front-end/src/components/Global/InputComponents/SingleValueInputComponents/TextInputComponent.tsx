import { useState } from "react";

import { DefaultInputProps, SingleValueInputComponent } from "./Default";

export type Props = DefaultInputProps & {
    type?: 'text' | 'password',
    inputProps?: {
        style?: React.CSSProperties,
    },
    defaultValue?: string,
    value: string | undefined,
    onChange: (value: string | undefined) => void,
    onEnter?: (value: string | undefined) => void,
};

export default function TextInputComponent({ id, name, label, variant = "outlined", type = 'text', inputProps, defaultValue, value, disabled, placeholder, onChange, onEnter, isError = false, style = {}, onAutoFill }: Props) {
    const [hidden, setHidden] = useState(type == 'password');

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
            value={value || ''}
            onChange={onChange}
            onEnter={onEnter}
            isError={isError}
            onAutoFill={onAutoFill}
            hidden={hidden}
            setHidden={setHidden}
        />
    );
};