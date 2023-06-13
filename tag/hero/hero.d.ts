import React from 'react';
export { default as HeroBackground } from './heroBackground';
export { default as HeroBody } from './heroBody';
export { default as HeroFooter } from './heroFooter';
export { default as HeroHeader } from './heroHeader';
export interface IHeroProps {
    interior?: boolean;
    search?: boolean;
    accent?: boolean;
    light?: boolean;
    [others: string]: any;
}
declare const Hero: React.FC<IHeroProps>;
export default Hero;
