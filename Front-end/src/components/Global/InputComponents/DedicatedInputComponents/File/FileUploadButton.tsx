import { useState } from "react";

import { DefaultProps } from "../../Default";
import { Button } from "@mui/material";

export type Props = Omit<DefaultProps, 'variant'> & {
    variant?: 'outlined' | 'text' | 'contained',
    className?: string,
    inputProps?: {
        style?: React.CSSProperties,
    },
    value: string | undefined,
    onChange: (value: string | undefined, files: FileList | undefined) => void,
};

export default function FileUploadButton({ id, name, label, variant = "outlined", className, value, disabled, onChange, style = {}, isError = false }: Props) {
    return (
        <Button id={id} className={`syw-button ${className || 'default'}`} variant={variant} style={{ ...style, color: isError ? 'error' : style.color }}>
            {label || name}
            <input
                type="file"
                value={value}
                onChange={(e) => onChange(e.target.value, e.target.files || undefined)}
                disabled={disabled}
                hidden
            />
        </Button>
    );
};