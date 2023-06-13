import React from 'react';
import IconCardTop from '../card/cardTop';
import IconCardIcon from './cardIcon';
import IconCardHeader from '../card/cardHeader';
import IconCardBody from '../card/cardBody';
import IconCardFooter from '../card/cardFooter';
export { default as IconCardTop } from '../card/cardTop';
export { default as IconCardIcon } from './cardIcon';
export { default as IconCardHeader } from '../card/cardHeader';
export { default as IconCardBody } from '../card/cardBody';
export { default as IconCardFooter } from '../card/cardFooter';
export interface IIconCardProps {
    /**
     * Identifies the card
     */
    id?: string;
    /**
     * Add class to card
     */
    className?: string;
    /**
     * Set selected style to card
     */
    selected?: boolean;
    /**
     * onClick function
     */
    onClick?: () => void;
    /**
     * Parts of card, one of this is required
     */
    children: React.ReactElement<typeof IconCardTop | typeof IconCardIcon | typeof IconCardHeader | typeof IconCardBody | typeof IconCardFooter>[] | React.ReactElement<typeof IconCardTop | typeof IconCardIcon | typeof IconCardHeader | typeof IconCardBody | typeof IconCardFooter>;
    [others: string]: any;
}
declare const IconCard: React.FC<IIconCardProps>;
export default IconCard;
