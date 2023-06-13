import React from 'react';
export { default as DropdownButton } from './dropdownButton';
export { default as DropdownMenu } from './dropdownMenu';
declare type DropdownPosition = 'top' | 'bottom' | 'right' | 'left';
interface DropdownProps {
    className?: string;
    onChangeToggleMenu?: (state: boolean) => void;
    itemsDivider?: boolean;
    forceRefresh?: number;
    defaultShow?: boolean;
    keepShown?: boolean;
    placement?: DropdownPosition;
    [others: string]: any;
}
declare const Dropdown: React.FC<DropdownProps>;
export default Dropdown;
