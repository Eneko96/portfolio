import React from 'react';
export interface IVideoPreviewImageProps {
    /**
     * Add class to video preview image
     */
    className?: string;
    [others: string]: any;
}
declare const VideoPreviewImage: React.FC<IVideoPreviewImageProps>;
export default VideoPreviewImage;
