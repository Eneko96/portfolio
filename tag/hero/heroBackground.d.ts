import React from 'react';
export interface IHeroBackgroundProps {
    /**
     * Apply different styles for Hero Background
     */
    className?: string;
    [others: string]: any;
}
declare const HeroBackground: React.FC<IHeroBackgroundProps>;
export default HeroBackground;
