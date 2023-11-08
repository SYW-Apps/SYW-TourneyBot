import { useEffect, useState, useRef } from "react";

import TextMultiSelectInputComponent, { Props as TextMultiSelectInputProps } from "./TextMultiSelectInputComponent";
import NumberMultiSelectInputComponent, { Props as NumberMultiSelectInputProps } from "./NumberMultiSelectInputComponent";
import DateTimeMultiSelectInputComponent, { Props as DateTimeMultiSelectInputProps } from "./DateTimeMultiSelectInputComponent";

type Props = TextMultiSelectInputProps | NumberMultiSelectInputProps | DateTimeMultiSelectInputProps;

export default function MultiSelectInputComponent(props: Props) {
    switch(props.type) {
        default:
        case 'text':
            return <TextMultiSelectInputComponent {...props} />;

        case 'number':
            return <NumberMultiSelectInputComponent {...props} />;

        case 'datetime':
            return <DateTimeMultiSelectInputComponent {...props} />;
    }
};