import React from 'react';
export { default as MoreFilters } from './filteredSearchMoreFilters';
export { default as FilteredSearchTopSection } from './filteredSearchTopSection';
export interface IFilteredSearchProps {
    /**
     * Children for completing the content of the filtered search
     * */
    children: React.ReactChildren | React.ReactChild | React.ReactChild[];
    /**
     * Boolean value for control whether the filtes shall be opened or not
     * */
    openFilters?: boolean;
}
declare const FilteredSearch: React.FC<IFilteredSearchProps>;
export default FilteredSearch;
