import { useState } from "react";

import { DefaultSelectProps, OptionData } from "../Default";
import { SearchableSelectInputComponent } from "./Default";

export type Props = DefaultSelectProps & {
    type: 'number',
    options: OptionData<number>[],
    value: number,
    onChange: (value: number | undefined) => void,
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
            options={options}
            defaultValue={-1}
            value={value}
            onChange={(e) => {
                onChange(e.target.value == '' ? undefined : e.target.value as number);
            }}
        />
    );
};