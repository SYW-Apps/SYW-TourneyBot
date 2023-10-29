import { useEffect, useState, useRef } from "react";

import TextSearchableSelectInputComponent, { Props as TextSearchableSelectInputProps } from "./TextSearchableSelectInputComponent";
import NumberSearchableSelectInputComponent, { Props as NumberSearchableSelectInputProps } from "./NumberSearchableSelectInputComponent";
import DateTimeSearchableSelectInputComponent, { Props as DateTimeSearchableSelectInputProps } from "./DateTimeSearchableSelectInputComponent";

type Props = TextSearchableSelectInputProps | NumberSearchableSelectInputProps | DateTimeSearchableSelectInputProps;

export default function SearchableSelectInputComponent(props: Props) {
    switch(props.type) {
        default:
        case 'text':
            return <TextSearchableSelectInputComponent {...props} />;

        case 'number':
            return <NumberSearchableSelectInputComponent {...props} />;

        case 'datetime':
            return <DateTimeSearchableSelectInputComponent {...props} />;
    }
};