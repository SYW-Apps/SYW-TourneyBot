import { DefaultInputProps, SingleValueInputComponent } from "./Default";

export type Props = DefaultInputProps & {
    type: 'date' | 'datetime-local' | 'time',
    inputProps?: {
        style?: React.CSSProperties,
    },
    defaultValue?: Date,
    value: Date | undefined,
    onChange: (value: Date | undefined) => void,
    onEnter?: (value: Date | undefined) => void,
};

export default function DateTimeInputComponent({ id, name, label, variant = "outlined", type = 'date', inputProps, defaultValue, value, disabled, placeholder, onChange, onEnter, isError = false, style = {}, onAutoFill }: Omit<Props, 'type'> & { type?: 'date' | 'datetime-local' | 'time' }) {
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
            onChange={onChange}
            onEnter={onEnter}
            isError={isError}
            onAutoFill={onAutoFill}
        />
    );
};