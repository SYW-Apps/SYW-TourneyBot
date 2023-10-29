import { useState } from "react";

import { DefaultSelectProps, OptionData, renderSYWMenuItem } from "../Default";

import { Select, SelectChangeEvent } from "@mui/material";
import { InputElementContainer } from "../../Default";
import InputComponent from "../../SingleValueInputComponents/Index";

type Props<T> = DefaultSelectProps & {
    options: OptionData<T>[],
    defaultValue: '' | -1,
    value: T | undefined,
    onChange: (e: SelectChangeEvent<T | 'none'>) => void,

    searchable?: boolean,
}

export function SearchableSelectInputComponent<T extends string | number>({ id, name, label, variant, value, disabled, options, style, onChange, isError, includeNoneOption, defaultValue }: Props<T>) {
    const [filter, setFilter] = useState<string>('');

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
                <InputComponent name="search" placeholder="search"
                    style={{ backgroundColor: style?.backgroundColor || undefined, color: style?.color || undefined }}
                    value={filter}
                    onChange={(value) => setFilter(value || '')}
                    onEnter={(value) => setFilter(value || '')}
                />
                {[
                    ...(includeNoneOption ?
                        [renderSYWMenuItem({ name, style, selectValue: value, defaultValue })]
                    : []),
                    ...options.filter(option => option.name.indexOf(filter) > -1).map(option =>
                        renderSYWMenuItem({ name, style, selectValue: value, option })
                    )
                ]}
            </Select>
        </InputElementContainer>
    );
}