import React from 'react';
export interface ISidebarButtonProps {
    /**
     * Identifies the button in sidebar
     */
    id: string;
    /**
     * Set the icon element in sidebar button
     */
    icon: any;
    /**
     * Set the label element in sidebar button
     */
    label: string;
    /**
     * Set if this element is a dropdown
     */
    dropdown?: boolean;
    viewMore?: boolean;
    /**
     * Set the route to redirect when button is clicked
     */
    href?: string;
    /**
     * Identifies if sidebar is collapsed or not
     */
    /**
     * Set if sidebar button is selected
     */
    /**
     * Set if sidebar button is disabled
     */
    disabled?: boolean;
    /**
     * Function when item is clicked
     */
    onClick?: (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLDivElement>) => void;
    /**
     * Add class to sidebar button
     */
    className?: string;
    [others: string]: any;
}
declare const SidebarButton: React.FC<ISidebarButtonProps>;
export default SidebarButton;
