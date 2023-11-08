import { DefaultSelectProps, OptionData } from "../Default";
import { MultiSelectInputComponent } from "./Default";

export type Props = DefaultSelectProps & {
    type: 'datetime',
    values: Date[],
    options: OptionData<Date>[],
    onChange: (values: Date[]) => void,
};

export default function DateTimeMultiSelectInputComponent({ id, name, label, variant = "outlined", disabled = false, values, options, onChange, style, isError = false, includeNoneOption = false }: Props) {
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
            options={options.map(option => { return { ...option, value: option.value.toString() }; })}
            defaultValue={''}
            values={values.map(value => value.toString())}
            onChange={(e) => {
                onChange(e.target.value == '' || e.target.value.length == 0 ? [] : (e.target.value as string[]).map(d => new Date(d)));
            }}
        />
    );
};