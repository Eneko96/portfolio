import React from 'react';
export interface ISplashScreen {
    /**
     * Set a accent colour as a background for splash screen component
     */
    accent?: boolean;
    /**
     * Set an image as a background for splash screen component
     */
    image?: string;
    /**
     * Set an video/animation as a background for splash screen component
     */
    video?: string;
    /**
     * Set an image of a person or company
     */
    logo: any;
    /**
     * Add class for splash screen component
     */
    className?: string;
    [others: string]: any;
}
declare const SplashScreen: React.FC<ISplashScreen>;
export default SplashScreen;
