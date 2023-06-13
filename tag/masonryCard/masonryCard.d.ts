import React from 'react';
import MasonryCardTop from '../card/cardTop';
import MasonryCardImg from '../card/cardImage';
import MasonryCardHeader from '../card/cardHeader';
import MasonryCardBody from '../card/cardBody';
export { default as MasonryCardTop } from '../card/cardTop';
export { default as MasonryCardImg } from '../card/cardImage';
export { default as MasonryCardHeader } from '../card/cardHeader';
export { default as MasonryCardBody } from '../card/cardBody';
export interface IMasonryCardProps {
    /**
     * Identifies the card
     */
    id?: string;
    /**
     * Add class to card
     */
    className?: string;
    /**
     * Set the selected style in card
     */
    selected?: boolean;
    /**
     * Set horizontal variant
     */
    horizontal?: boolean;
    /**
     * Set accent variant
     */
    accent?: boolean;
    /**
     * onClick function in card
     */
    onClick?: () => void;
    /**
     * Parts of card, one of this is required
     */
    children: React.ReactElement<typeof MasonryCardTop | typeof MasonryCardImg | typeof MasonryCardHeader | typeof MasonryCardBody>[] | React.ReactElement<typeof MasonryCardTop | typeof MasonryCardImg | typeof MasonryCardHeader | typeof MasonryCardBody>;
    [others: string]: any;
}
declare const MasonryCard: React.FC<IMasonryCardProps>;
export default MasonryCard;
