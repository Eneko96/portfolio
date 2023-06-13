import React from 'react';
export interface IVideoPreviewTagProps {
    /**
     * Add class to video preview tag
     */
    className?: string;
    [others: string]: any;
}
declare const VideoPreviewTag: React.FC<IVideoPreviewTagProps>;
export default VideoPreviewTag;
