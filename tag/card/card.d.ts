import React from 'react';
import CardTop from './cardTop';
import CardImg from './cardImage';
import CardHeader from './cardHeader';
import CardBody from './cardBody';
import CardFooter from './cardFooter';
import CardFloatButtons from './cardFloatButtons';
export { default as CardTop } from './cardTop';
export { default as CardImg } from './cardImage';
export { default as CardHeader } from './cardHeader';
export { default as CardBody } from './cardBody';
export { default as CardFooter } from './cardFooter';
export { default as CardFloatButtons } from './cardFloatButtons';
export interface ICardProps {
    /**
     * Identifies the card item
     */
    id?: string;
    /**
     * Change card type for horizontal card
     */
    horizontal?: boolean;
    /**
     * Add class to card
     */
    className?: string;
    /**
     * Set card selected
     */
    selected?: boolean;
    /**
     * onClick function
     */
    onClick?: () => void;
    /**
     * Parts of cards, one of this is required
     */
    children: React.ReactElement<typeof CardTop | typeof CardImg | typeof CardHeader | typeof CardBody | typeof CardFooter | typeof CardFloatButtons>[] | React.ReactElement<typeof CardTop | typeof CardImg | typeof CardHeader | typeof CardBody | typeof CardFooter | typeof CardFloatButtons>;
    [others: string]: any;
}
declare const Card: React.FC<ICardProps>;
export default Card;
