import React from 'react';
export interface IQuote {
    /**
     * Adds the quote phrase
     */
    quote: string;
    /**
     * For setting the Avatar info
     */
    avatar?: {
        img?: any;
        title?: string;
        subtitle?: string;
    };
    /**
     * Additional styling if needed
     */
    className?: string;
    [others: string]: any;
}
declare const Quote: React.FC<IQuote>;
export default Quote;
