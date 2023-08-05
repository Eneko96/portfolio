import React from 'react';
export interface ICardFigureProps {
    /**
     * Identifies the accordion item
     */
    id?: string;
    /**
     * Add class to accordion
     */
    className?: string;
    [others: string]: any;
}
declare const CardFigure: React.FC<ICardFigureProps>;
export default CardFigure;