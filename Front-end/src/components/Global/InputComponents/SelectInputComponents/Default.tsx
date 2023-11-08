import { MenuItem } from "@mui/material";
import { DefaultProps } from "../Default"
import { useEffect, useState } from "react";

export type DefaultSelectProps = DefaultProps & {
    includeNoneOption?: boolean
};

export type OptionData<T> = {
    id: string,
    name: string,
    value: T,
}

export function renderSYWMenuItem<T extends string | number>({ name, option, selectValue, style, defaultValue }: { name: string | undefined, option?: OptionData<T>, selectValue: T | T[] | undefined, style?: React.CSSProperties, defaultValue?: '' | -1 }) {
    const [isSelected, setIsSelected] = useState(false);
    
    useEffect(() => {
        const selected = Array.isArray(selectValue) ? (option == undefined ? selectValue.length == 0 : selectValue.indexOf(option.value) > -1) : selectValue == option?.value;
        
        setIsSelected(selected);
    }, [selectValue, option]);
    return (
        <MenuItem key={`${name}-${option?.id || 'none_selected'}`} id={`${name}-${option?.id || 'none_selected'}`} className="syw-input-select-option" style={{ border: isSelected ? 'solid 1px #2DF' : '', backgroundColor: style?.backgroundColor || '', color: style?.color || '' }} value={option?.value || defaultValue} selected={isSelected}>{option?.name || 'Select an option'}</MenuItem>
    );
}