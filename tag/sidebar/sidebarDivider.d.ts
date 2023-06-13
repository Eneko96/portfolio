import React from 'react';
export interface ISidebarDividerProps {
    /**
     * Add class to sidebar divider
     */
    className?: string;
    [others: string]: any;
}
declare const SidebarDivider: React.FC<ISidebarDividerProps>;
export default SidebarDivider;
