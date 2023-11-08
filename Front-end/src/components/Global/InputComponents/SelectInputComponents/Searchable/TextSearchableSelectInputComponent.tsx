import { useState } from "react";

import { DefaultSelectProps, OptionData } from "../Default";
import { SearchableSelectInputComponent } from "./Default";

export type Props = DefaultSelectProps & {
    type?: 'text',
    options: OptionData<string>[],
    value: string | undefined,
    onChange: (value: string | undefined) => void,
};

export default function TextSearchableSelectInputComponent({ id, name, label, variant = "outlined", value, disabled = false, options, style, onChange, isError = false, includeNoneOption = false }: Props) {
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
            defaultValue={''}
            value={value}
            onChange={(e) => {
                onChange(e.target.value == '' ? undefined : e.target.value as string);
            }}
        />
    );
};