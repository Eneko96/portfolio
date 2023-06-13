import React from 'react';
export { default as SidebarLogo } from './sidebarLogo';
export { default as SidebarButton } from './sidebarButton';
export { default as SidebarDivider } from './sidebarDivider';
export interface ISidebarProps {
    /**
     * Identifies the sidebar component
     */
    id?: string;
    /**
     * Change mode for sidebar in collapsed mode
     */
    collapsed?: boolean;
    /**
     * Set the default item selected, is an id of the sidebar item selected
     */
    defaultItemSelected?: string;
    /**
     * Function when item is clicked
     */
    onClickSidebarItem?: (itemId: string) => void;
    /**
     * Add class to sidebar
     */
    className?: string;
    /**
     * Callback for when the sidebar is collapsed
     */
    onCollapse?: (collapsed: boolean) => void;
    [others: string]: any;
}
declare const Sidebar: React.FC<ISidebarProps>;
export default Sidebar;
