import React from 'react';
export interface IVideoPreviewSubtitleProps {
    /**
     * Add class to video preview subtitle
     */
    className?: string;
    [others: string]: any;
}
declare const VideoPreviewSubtitle: React.FC<IVideoPreviewSubtitleProps>;
export default VideoPreviewSubtitle;
