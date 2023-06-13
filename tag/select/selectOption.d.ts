import React from 'react';
export interface ISelectOptionProps {
    id?: string;
    value: any;
    label: string;
    [others: string]: any;
}
declare const SelectOption: React.FC<ISelectOptionProps>;
export default SelectOption;
