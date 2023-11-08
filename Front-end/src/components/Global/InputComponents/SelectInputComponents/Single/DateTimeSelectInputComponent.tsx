import { useEffect, useState } from "react";

import { DefaultSelectProps, OptionData } from "../Default";
import { SingleSelectInputComponent } from "./Default";

export type Props = Omit<DefaultSelectProps, 'type'> & {
    type: 'datetime',
    options: OptionData<Date>[],
    value: Date | undefined,
    onChange: (value: Date | undefined) => void,
};

export default function DateTimeSelectInputComponent({ id, name, label, variant = "outlined", value, disabled = false, options, style, onChange, isError = false, includeNoneOption = false }: Props) {
    return (
        <SingleSelectInputComponent
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
                onChange(e.target.value == '' ? undefined : new Date(e.target.value as string));
            }}
        />
    );
};