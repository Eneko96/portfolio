import React from 'react';
import TeaserCardTop from '../card/cardTop';
import TeaserCardImg from '../card/cardImage';
import TeaserCardHeader from '../card/cardHeader';
import TeaserCardBody from '../card/cardBody';
import TeaserCardFooter from '../card/cardFooter';
export { default as TeaserCardTop } from '../card/cardTop';
export { default as TeaserCardImg } from '../card/cardImage';
export { default as TeaserCardHeader } from '../card/cardHeader';
export { default as TeaserCardBody } from '../card/cardBody';
export { default as TeaserCardFooter } from '../card/cardFooter';
export interface ITeaserCardProps {
    /**
     * Identifies the card
     */
    id?: string;
    /**
     * Add class to card
     */
    className?: string;
    /**
     * Set selected style in card
     */
    selected?: boolean;
    /**
     * onClick function
     */
    onClick?: () => void;
    /**
     * Parts of card, one of this is required
     */
    children: React.ReactElement<typeof TeaserCardTop | typeof TeaserCardImg | typeof TeaserCardHeader | typeof TeaserCardBody | typeof TeaserCardFooter>[] | React.ReactElement<typeof TeaserCardTop | typeof TeaserCardImg | typeof TeaserCardHeader | typeof TeaserCardBody | typeof TeaserCardFooter>;
    [others: string]: any;
}
declare const TeaserCard: React.FC<ITeaserCardProps>;
export default TeaserCard;
