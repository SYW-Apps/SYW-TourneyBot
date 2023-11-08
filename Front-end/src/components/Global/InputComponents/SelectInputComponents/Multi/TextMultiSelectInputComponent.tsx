import { DefaultSelectProps, OptionData } from "../Default";
import { MultiSelectInputComponent } from "./Default";

export type Props = DefaultSelectProps & {
    type?: 'text',
    values: string[],
    options: OptionData<string>[],
    onChange: (values: string[]) => void,
};

export default function TextMultiSelectInputComponent({ id, name, label, variant = "outlined", disabled = false, values, options, onChange, style, isError = false, includeNoneOption = false }: Props) {
    return (
        <MultiSelectInputComponent
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
            values={values}
            onChange={(e) => {
                onChange(typeof e.target.value == 'string' ? [e.target.value] : e.target.value.indexOf('') > -1 ? [] : e.target.value as string[]);
            }}
        />
    );
};