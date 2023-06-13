import React from 'react';
export interface IFooterBrandProps {
    /**
     * Adds classname to the brand
     * */
    className?: string;
    [others: string]: any;
}
declare const FooterBrand: React.FC<IFooterBrandProps>;
export default FooterBrand;
