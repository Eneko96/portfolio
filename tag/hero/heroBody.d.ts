import React from 'react';
export interface IHeroBodyProps {
    /**
     * Apply different styles for Hero body
     */
    className?: string;
    [others: string]: any;
}
declare const HeroBody: React.FC<IHeroBodyProps>;
export default HeroBody;
