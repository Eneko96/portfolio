import React from 'react';
export interface IFooterLogoProps {
    /**
     * Adds classname to the logo
     * */
    className?: string;
    [others: string]: any;
}
declare const FooterLogo: React.FC<IFooterLogoProps>;
export default FooterLogo;
