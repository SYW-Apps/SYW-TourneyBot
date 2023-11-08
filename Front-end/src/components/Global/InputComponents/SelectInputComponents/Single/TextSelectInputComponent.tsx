import { DefaultSelectProps, OptionData } from "../Default";
import { SingleSelectInputComponent } from "./Default";

export type Props = Omit<DefaultSelectProps, 'type'> & {
    type?: 'text',
    options: OptionData<string>[],
    value: string | undefined,
    onChange: (value: string | undefined) => void,
};

export default function TextSelectInputComponent({ id, name, label, variant = "outlined", value, disabled = false, style, options, onChange, isError = false, includeNoneOption = false }: Props) {
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
            defaultValue={''}
            value={value}
            onChange={(e) => {
                onChange(e.target.value == '' ? undefined : e.target.value as string);
            }}
        />
    );
};