import { useState } from "react";

import { DefaultSelectProps, OptionData } from "../Default";
import { SearchableSelectInputComponent } from "./Default";

export type Props = DefaultSelectProps & {
    type: 'datetime',
    value: Date | undefined,
    options: OptionData<Date>[],
    onChange: (value: Date | undefined) => void,
};

export default function UserSearchableSelectInputComponent({ id, name, label, variant = "outlined", value, disabled = false, options, style, onChange, isError = false, includeNoneOption = false }: Props) {
    return (
        <SearchableSelectInputComponent
            id={id}
            name={name}
            label={label}
            variant={variant}
            style={style}
            disabled={disabled}
            isError={isError}
            includeNoneOption={includeNoneOption}
            options={options.map(option => { return { ...option, value: option.value.toString() }; })}
            defaultValue={''}
            value={value?.toString()}
            onChange={(e) => {
                onChange(e.target.value == '' ? undefined : new Date(e.target.value));
            }}
        />
    );
};