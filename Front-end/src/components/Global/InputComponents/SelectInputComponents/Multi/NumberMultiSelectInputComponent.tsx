import { DefaultSelectProps, OptionData } from "../Default";
import { MultiSelectInputComponent } from "./Default";

export type Props = DefaultSelectProps & {
    type: 'number',
    values: number[],
    options: OptionData<number>[],
    onChange: (values: number[]) => void,
};

export default function NumberMultiSelectInputComponent({ id, name, label, variant = "outlined", disabled = false, values, options, onChange, style, isError = false, includeNoneOption = false }: Props) {
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
            defaultValue={-1}
            values={values}
            onChange={(e) => {
                onChange(typeof e.target.value == 'string' ? [parseFloat(e.target.value)] : e.target.value.indexOf(-1) > -1 ? [] : e.target.value as number[]);
            }}
        />
    );
};