import React from 'react';
export interface IHeroFooterProps {
    /**
     * Apply different styles for Hero Footer
     */
    className?: string;
    /**
     * Add caption to the Hero Footer
     */
    caption?: string;
    [others: string]: any;
}
declare const HeroFooter: React.FC<IHeroFooterProps>;
export default HeroFooter;
