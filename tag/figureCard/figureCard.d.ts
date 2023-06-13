import React from 'react';
import FigureCardFigure from './cardFigure';
import FigureCardHeader from '../card/cardHeader';
import FigureCardBody from '../card/cardBody';
import FigureCardFloatIcon from '../card/cardFloatIcon';
export { default as FigureCardFigure } from './cardFigure';
export { default as FigureCardHeader } from '../card/cardHeader';
export { default as FigureCardBody } from '../card/cardBody';
export { default as FigureCardFloatIcon } from '../card/cardFloatIcon';
export interface IFigureCardProps {
    /**
     * Identifies the card
     */
    id?: string;
    /**
     * Add class to card
     */
    className?: string;
    /**
     * Set card selected
     */
    selected?: boolean;
    /**
     * Set accent background
     */
    accent?: boolean;
    /**
     * onClick function
     */
    onClick?: () => void;
    /**
     *
     * Parts of card, one of this is required
     */
    children: React.ReactElement<typeof FigureCardHeader | typeof FigureCardBody | typeof FigureCardFigure | typeof FigureCardFloatIcon>[] | React.ReactElement<typeof FigureCardHeader | typeof FigureCardBody | typeof FigureCardFigure | typeof FigureCardFloatIcon>;
    [others: string]: any;
}
declare const FigureCard: React.FC<IFigureCardProps>;
export default FigureCard;
