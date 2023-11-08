import { DefaultSelectProps, OptionData, renderSYWMenuItem } from "../Default";
import { Select, SelectChangeEvent } from "@mui/material";
import { InputElementContainer } from "../../Default";

type Props<T> = DefaultSelectProps & {
    options: OptionData<T>[],
    defaultValue: '' | -1,
    values: T[],
    onChange: (e: SelectChangeEvent<T[] | ''>) => void,
}

export function MultiSelectInputComponent<T extends string | number>({ id, name, label, variant, values, disabled, options, style, onChange, isError, includeNoneOption, defaultValue }: Props<T>) {
    return (
        <InputElementContainer style={style}>
            <Select
                className="syw-input select"
                style={{ backgroundColor: '#111', ...style, color: isError ? 'red' : style?.color || 'white', width: '100%', height: '100%', margin: undefined }}
                variant={variant}
                id={id || name}
                disabled={disabled}
                label={label || name}
                multiple={values.length > 0}
                value={values.length == 0 ? '' : values}
                onChange={onChange}
                displayEmpty
            >
            {[
                ...(includeNoneOption ?
                    [renderSYWMenuItem({ name, style, selectValue: values, defaultValue })]
                : []),
                ...options.map(option =>
                    renderSYWMenuItem({ name, style, selectValue: values, option })
                )
            ]}
            </Select>
        </InputElementContainer>
    );
}