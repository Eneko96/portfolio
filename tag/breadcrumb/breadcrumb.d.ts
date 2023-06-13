import React from 'react';
export { default as BreadcrumbItem } from './breadcrumbItem';
export interface IBreadcrumbProps {
    id?: string;
    className?: string;
    [others: string]: any;
}
declare const Breadcrumb: React.FC<IBreadcrumbProps>;
export default Breadcrumb;
