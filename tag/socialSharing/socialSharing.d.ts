import React from 'react';
export interface ISocialSharingProps {
    /**
     *  Type of social sharing item
     */
    linkedin?: boolean;
    facebook?: boolean;
    whatsapp?: boolean;
    twitter?: boolean;
    /**
     *  Social media link
     */
    title: string;
    [others: string]: any;
}
declare const SocialSharing: React.FC<ISocialSharingProps>;
export default SocialSharing;
