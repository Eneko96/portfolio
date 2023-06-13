import React from 'react';
export { default as DataTableActionBar } from './dataTableActionBar';
export { default as DataTableTopToolbar } from './dataTableTopToolbar';
interface IDataTableProps {
    className?: string;
    defaultActiveTab?: string;
    [others: string]: any;
}
export interface IDataTableChildProps {
    className?: string;
    [others: string]: any;
}
declare const DataTable: React.FC<IDataTableProps>;
export default DataTable;
