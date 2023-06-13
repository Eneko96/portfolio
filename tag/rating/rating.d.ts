import React from 'react';
export interface IRating {
    /**
     * Amount of stars
     */
    amount: number;
    /**
     * On rate callback
     */
    onRate: (amount: number) => void;
    /**
     * Alternative class name
     */
    className?: string;
    /**
     * Label for the rating
     */
    label?: {
        left: string;
        right: string;
    };
}
declare const Rating: React.FC<IRating>;
export default Rating;
