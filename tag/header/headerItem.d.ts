import React from 'react';
export interface IHeaderItemOption {
    id?: string;
    label: string;
    onClick?: () => void;
    href?: string;
}
export interface IHeaderItemProps {
    id?: string;
    className?: string;
    selected?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    options?: IHeaderItemOption[];
    optionsDivider?: boolean;
    children: string;
    [others: string]: any;
}
declare const HeaderItem: React.FC<IHeaderItemProps>;
export default HeaderItem;
