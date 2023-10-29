import { Grid } from "@mui/material";

export type DefaultProps = {
    id?: string,
    name?: string,
    label?: string,
    variant?: "filled" | "outlined" | "standard",
    disabled?: boolean,
    style?: React.CSSProperties,
    isError?: boolean,
    includeNoneOption?: boolean
};

export function InputElementContainer({ children, style, hideBorder = false }: { children: any, style?: React.CSSProperties, hideBorder?: boolean }) {
    return (
        <Grid className={`syw-input-container${hideBorder ? ' hide-border' : ''}`} style={{ width: style?.width || '100%', height: style?.height || '100%', backgroundColor: style?.backgroundColor || '#111', color: style?.color || 'white', margin: style?.margin }}>
            {children}
        </Grid>
    );
}