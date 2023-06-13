import React from 'react';
export interface ITableElement {
    className?: string;
    [others: string]: any;
}
declare const TElement: React.FC<ITableElement>;
export default TElement;
