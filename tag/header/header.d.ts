import React from 'react';
export { default as HeaderLogo } from './headerLogo';
export { default as HeaderItem } from './headerItem';
export interface IHeaderLanguage {
    id: string;
    label: string;
    selected?: boolean;
}
interface IHeaderContact {
    label: string;
    href: string;
}
export interface IHeaderProps {
    /**
     * Add class name in header
     */
    className?: string;
    /**
     * Handler search icon in header
     */
    onSearch?: () => void;
    /**
     * Set options and label of languages selector in header
     */
    languages?: IHeaderLanguage[];
    /**
     * Handle onClick option in languages selector
     */
    onClickLanguage?: (id: string) => void;
    /**
     * Show link to contact with label and href
     */
    contact?: IHeaderContact;
    [others: string]: any;
}
declare const Header: React.FC<IHeaderProps>;
export default Header;
