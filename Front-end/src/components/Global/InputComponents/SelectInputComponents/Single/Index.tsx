import { useEffect, useState, useRef } from "react";

import TextSelectInputComponent, { Props as TextSelectInputProps } from "./TextSelectInputComponent";
import NumberSelectInputComponent, { Props as NumberSelectInputProps } from "./NumberSelectInputComponent";
import DateTimeSelectInputComponent, { Props as DateTimeSelectInputProps } from "./DateTimeSelectInputComponent";

type Props = TextSelectInputProps | NumberSelectInputProps | DateTimeSelectInputProps;

export default function SelectInputComponent(props: Props) {
    switch(props.type) {
        default:
        case 'text':
            return <TextSelectInputComponent {...props} />;

        case 'number':
            return <NumberSelectInputComponent {...props} />;

        case 'datetime':
            return <DateTimeSelectInputComponent {...props} />;
    }
};