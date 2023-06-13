import React from 'react';
export interface IAccordionHeaderProps {
    /**
     * Add class to accordion header
     */
    className?: string;
    [others: string]: any;
}
declare const AccordionHeader: React.FC<IAccordionHeaderProps>;
export default AccordionHeader;
