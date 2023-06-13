import React from 'react';
export { default as TBody } from './TBody';
export { default as TElement } from './TElement';
export { default as THead } from './THead';
export { default as TRow } from './TRow';
export interface ITableProps {
    disabled?: boolean;
    className?: string;
    [others: string]: any;
}
declare const Table: React.FC<ITableProps>;
export default Table;
