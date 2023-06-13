import React from 'react';
export declare enum AvatarSize {
    small = "small",
    xsmall = "xsmall",
    big = "big"
}
export interface IAvatarProps {
    /**
     * Title of avatar image
     */
    title?: string;
    /**
     * Subtitle of avatar image
     */
    subtitle?: string;
    /**
     * Set the xsmall size
     */
    xsmall?: boolean;
    /**
     * Set the small size
     */
    small?: boolean;
    /**
     * Set the big size
     */
    big?: boolean;
    /**
     * Set if Avatar is disabled
     */
    disabled?: boolean;
    /**
     * Function that will ocurred when user click on avatar image
     */
    onClick?: () => void;
    badge?: number | string;
    /**
     * Additional or alternative styling
     */
    className?: string;
    [others: string]: any;
}
declare const Avatar: React.FC<IAvatarProps>;
export default Avatar;
