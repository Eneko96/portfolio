import React from 'react';
export interface IOverflowMenuProps {
    show: boolean;
    /**
     * Title of the Overflow Menu
     */
    title: string;
    /**
     * Name of the action if needed
     */
    action?: string;
    /**
     * Displays close button and handles the event
     */
    onClose: () => void;
    showCloseButton?: boolean;
    /**
     * Handler for the action Button
     */
    onAction?: () => void;
    className?: string;
    parentRef?: any;
    [other: string]: any;
}
declare const OverflowMenu: React.FC<IOverflowMenuProps>;
export default OverflowMenu;
