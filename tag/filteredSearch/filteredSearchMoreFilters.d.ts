import React from 'react';
import Select from '../select/select';
export interface IMoreFilterProps {
    /**
     * Children for Displaying its content
     */
    children: typeof Select[] | any;
}
declare const MoreFilters: React.FC<IMoreFilterProps>;
export default MoreFilters;
