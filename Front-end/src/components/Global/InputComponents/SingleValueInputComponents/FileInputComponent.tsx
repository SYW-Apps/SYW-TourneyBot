import { DefaultInputProps } from "./Default";
import { InputElementContainer } from "../Default";
import { Grid, TextField } from "@mui/material";

export type Props = DefaultInputProps & {
    type: 'file',
    inputProps?: {
        style?: React.CSSProperties,
        hidden?: boolean,
        multiple?: boolean,
    },
    defaultValue?: FileList,
    value: string | undefined,
    onChange: (value: string | undefined, files: FileList | undefined) => void,

    multiple?: boolean,
};

export default function FileInputComponent({ id, name, label, variant = "outlined", type = 'file', inputProps, value, multiple = false, disabled, placeholder, onChange, isError = false, style = {} }: Omit<Props, 'type'> & { type?: 'file' }) {
    return (
        <InputElementContainer style={style} hideBorder={inputProps?.hidden}>
            <Grid style={{ width: '100%' }}>
                <TextField
                    className={`syw-input${inputProps?.hidden ? ' hidden' : ''}`}
                    style={{ ...style, color: isError ? 'red' : style?.color || 'white', width: '100%', height: undefined, margin: undefined }}
                    disabled={disabled}
                    variant={variant}
                    placeholder={placeholder}
                    id={id || name}
                    label={label || name}
                    value={value || ''}
                    type={type}
                    inputProps={{ ...inputProps, multiple: inputProps?.multiple || multiple }}
                    onChange={(e) => {
                        onChange(e.target.value, (e.target as HTMLInputElement).files || undefined);
                    }}
                />
            </Grid>
        </InputElementContainer>
    );
};