import React from 'react';
export interface IButtonProps {
    /**
     * Set the cta style
     */
    cta?: boolean;
    /**
     * Set the primary style
     */
    primary?: boolean;
    /**
     * Set the secondary style
     */
    secondary?: boolean;
    /**
     * Set the interactive style
     */
    interactive?: boolean;
    /**
     * Set the icon style
     */
    icon?: {
        value: string;
        position: 'left' | 'right';
    };
    /**
     * Set the fullWidth style
     */
    fullWidth?: boolean;
    /**
     * Additional or alternative styling
     */
    className?: string;
    /**
     * Set the small style
     */
    small?: boolean;
    /**
     * Set the large style
     */
    large?: boolean;
    [others: string]: any;
}
declare const Button: React.FC<IButtonProps>;
export default Button;
