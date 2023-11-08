import { DefaultSelectProps, OptionData, renderSYWMenuItem } from "../Default";
import { Select, SelectChangeEvent } from "@mui/material";
import { InputElementContainer } from "../../Default";

type Props<T> = DefaultSelectProps & {
    options: OptionData<T>[],
    defaultValue: '' | -1,
    value: T | undefined,
    onChange: (e: SelectChangeEvent<T | ''>) => void,
}

export function SingleSelectInputComponent<T extends string | number>({ id, name, label, variant, value, disabled, options, style, onChange, isError, includeNoneOption, defaultValue }: Props<T>) {
    return (
        <InputElementContainer style={style}>
            <Select
                className="syw-input select"
                style={{ backgroundColor: '#111', ...style, color: isError ? 'red' : style?.color || 'white', width: '100%', height: '100%', margin: undefined }}
                variant={variant}
                id={id || name}
                disabled={disabled}
                label={label || name}
                value={value || ''}
                onChange={onChange}
                displayEmpty
            >
            {[
                ...(includeNoneOption ?
                    [renderSYWMenuItem({ name, style, selectValue: value, defaultValue })]
                : []),
                ...options.map(option =>
                    renderSYWMenuItem({ name, style, selectValue: value, option })
                )
            ]}
            </Select>
        </InputElementContainer>
    );
}