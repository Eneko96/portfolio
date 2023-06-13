import React from 'react';
import FooterBrand from './footerBrand';
import FooterLogo from './footerLogo';
import FooterPoliciesLinks from './footerPoliciesLinks';
import FooterSocialMediaLinks from './footerSocialMediaLinks';
import FooterUsefulLinks from './footerUsefulLinks';
export { default as FooterBrand } from './footerBrand';
export { default as FooterLogo } from './footerLogo';
export { default as FooterPoliciesLinks } from './footerPoliciesLinks';
export { default as FooterSocialMediaLinks } from './footerSocialMediaLinks';
export { default as FooterUsefulLinks } from './footerUsefulLinks';
export interface IFooterProps {
    /**
     * Adds class to the footer component
     */
    className?: string;
    children: React.ReactElement<typeof FooterBrand | typeof FooterLogo | typeof FooterPoliciesLinks | typeof FooterSocialMediaLinks | typeof FooterUsefulLinks>[] | React.ReactElement<typeof FooterBrand | typeof FooterLogo | typeof FooterPoliciesLinks | typeof FooterSocialMediaLinks | typeof FooterUsefulLinks>;
    [others: string]: any;
}
declare const Footer: React.FC<IFooterProps>;
export default Footer;
