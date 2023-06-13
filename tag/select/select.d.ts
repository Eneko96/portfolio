import React from 'react';
export { default as Option } from './selectOption';
export interface ISelectProps {
    /**
     * Define if select is large
     */
    large?: boolean;
    /**
     * Define if is select filter
     */
    filter?: boolean;
    /**
     * Define if is select multiple
     */
    multiple?: boolean;
    /**
     * Define if select is disabled
     */
    disabled?: boolean;
    /**
     * Define if select is required
     */
    required?: boolean;
    /**
     * Define if select have an error
     */
    error?: boolean;
    /**
     * Set label for select
     */
    label?: string;
    /**
     * Set helper text for select
     */
    helperText?: string;
    /**
     * Set the icon in helper text. It's a name of material icon, example: "info"
     */
    helperIcon?: string;
    /**
     * Set placeholder for select
     */
    placeholder: string;
    /**
     * Set different classes for select component
     */
    className?: string;
    /**
     * Set the name of value in a form
     */
    name: string;
    /**
     * Set the value of select
     */
    value?: any;
    /**
     * Return the value of select
     */
    onChange?: (value: any) => void;
    /**
     * Sets the value of the filter,
     * in case you manage the options representation outside the component,
     * you will need to manage this state outside this component as well,
     * in case you are using the filter option
     */
    filterValue?: string;
    /**
     * Return the value of filter value (remember the previous explanation)
     */
    onChangeFilter?: (filterValue: string) => void;
    [others: string]: any;
}
declare const Select: React.FC<ISelectProps>;
export default Select;
