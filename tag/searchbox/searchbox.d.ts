import React from 'react';
export interface ISearchboxProps {
    id?: string;
    placeholder?: string;
    name?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    defaultValue?: string;
    small?: boolean;
    /**
     * Additional styling if needed
     */
    className?: string;
    [others: string]: any;
}
declare const Searchbox: React.FC<ISearchboxProps>;
export default Searchbox;
