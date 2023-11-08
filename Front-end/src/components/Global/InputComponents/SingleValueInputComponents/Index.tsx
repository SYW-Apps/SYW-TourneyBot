import { useEffect, useState, useRef } from "react";

import TextInputComponent, { Props as TextInputProps } from "./TextInputComponent";
import TextAreaInputComponent, { Props as TextAreaInputProps } from "./TextAreaInputComponent";
import NumberInputComponent, { Props as NumberInputProps } from "./NumberInputComponent";
import CheckboxInputComponent, { Props as CheckboxInputProps } from "./CheckboxInputComponent";
import DateTimeInputComponent, { Props as DateTimeInputProps } from "./DateTimeInputComponent";
import FileInputComponent, { Props as FileInputProps } from "./FileInputComponent";

type Props = TextInputProps | TextAreaInputProps | NumberInputProps | CheckboxInputProps | DateTimeInputProps | FileInputProps;

export default function InputComponent(props: Props) {
    switch(props.type) {
        default:
        case 'text':
        case 'password':
            return <TextInputComponent {...props} />;

        case 'text-area':
            return <TextAreaInputComponent {...props} />

        case 'number':
            return <NumberInputComponent {...props} />;

        case 'checkbox':
            return <CheckboxInputComponent {...props} />;

        case 'date':
        case 'datetime-local':
        case 'time':
            return <DateTimeInputComponent {...props} />;

        case 'file':
            return <FileInputComponent {...props} />;
    }
};