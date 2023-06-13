import React from 'react';
export interface IHeroHeaderProps {
    /**
     * Apply different styles for Hero Header
     */
    className?: string;
    [others: string]: any;
}
declare const HeroHeader: React.FC<IHeroHeaderProps>;
export default HeroHeader;
