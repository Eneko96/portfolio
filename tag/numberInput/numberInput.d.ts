import React from 'react';
export interface INumberInputProps {
    disabled?: boolean;
    className?: string;
    error?: boolean;
    required?: boolean;
    defaultValue?: number;
    onChange?: (num: number) => void;
    boundaries?: {
        max: number;
        min: number;
    };
    placeholder?: string;
    helperText?: {
        icon: React.ReactElement;
        text: string;
    };
    label?: string;
    large?: boolean;
    [others: string]: any;
}
declare const NumberInput: React.FC<INumberInputProps>;
export default NumberInput;
