import { useEffect, useState } from "react";

import { DefaultSelectProps, OptionData } from "../Default";
import { SingleSelectInputComponent } from "./Default";

export type Props = Omit<DefaultSelectProps, 'type'> & {
    type: 'number',
    options: OptionData<number>[],
    value: number | undefined,
    onChange: (value: number | undefined) => void,
};

export default function TextSelectInputComponent({ id, name, label, variant = "outlined", value, disabled = false, options, style, onChange, isError = false, includeNoneOption = false }: Props) {
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
            options={options}
            defaultValue={-1}
            value={value}
            onChange={(e) => {
                onChange(e.target.value == '' ? undefined : e.target.value as number);
            }}
        />
    );
};