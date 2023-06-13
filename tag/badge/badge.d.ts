import React from 'react';
export interface IBadgeProps {
    /**
     * Set error variant in badge
     */
    error?: boolean;
    /**
     * Set success variant in badge
     */
    success?: boolean;
    /**
     * Set small variant in badge
     */
    small?: boolean;
    /**
     * Additional or alternative styling
     */
    className?: string;
    [others: string]: any;
}
declare const Badge: React.FC<IBadgeProps>;
export default Badge;
