import React from 'react';
export interface ICardBodyProps {
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
declare const CardBody: React.FC<ICardBodyProps>;
export default CardBody;
