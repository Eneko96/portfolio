import React from 'react';
import LocationMapCardTop from '../card/cardTop';
import LocationMapCardMap from '../card/cardImage';
import LocationMapCardHeader from '../card/cardHeader';
import LocationMapCardBody from '../card/cardBody';
export { default as LocationMapCardTop } from '../card/cardTop';
export { default as LocationMapCardMap } from '../card/cardImage';
export { default as LocationMapCardHeader } from '../card/cardHeader';
export { default as LocationMapCardBody } from '../card/cardBody';
export interface ILocationMapCardProps {
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
    children: React.ReactElement<typeof LocationMapCardTop | typeof LocationMapCardMap | typeof LocationMapCardHeader | typeof LocationMapCardBody>[] | React.ReactElement<typeof LocationMapCardTop | typeof LocationMapCardMap | typeof LocationMapCardHeader | typeof LocationMapCardBody>;
    [others: string]: any;
}
declare const LocationMapCard: React.FC<ILocationMapCardProps>;
export default LocationMapCard;
