import React from 'react';
export interface ISidebarLogoProps {
    /**
     * Add class to sidebar logo
     */
    className?: string;
    [others: string]: any;
}
declare const SidebarLogo: React.FC<ISidebarLogoProps>;
export default SidebarLogo;
