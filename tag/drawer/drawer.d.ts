import React from 'react';
export { default as DrawerHeader } from './drawerHeader';
export { default as DrawerBody } from './drawerBody';
export { default as DrawerFooter } from './drawerFooter';
export interface IDrawerProps {
    /**
     * To display the drawer
     */
    open: boolean;
    /**
     * Reference for parent element and render in absolute position on parent with overlay
     */
    parentRef?: any;
    /**
     * Add class to drawer
     */
    className?: string;
    /**
     * Set drawer as a portal with overlay
     */
    renderAsPortal?: boolean;
    position?: 'left' | 'right';
    /**
     * handler function for the close button
     */
    onClose?: () => void;
    /**
     * handler function for the back button
     */
    onBack?: () => void;
    [others: string]: any;
}
declare const Drawer: React.FC<IDrawerProps>;
export default Drawer;
