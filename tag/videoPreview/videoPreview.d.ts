import React from 'react';
import VideoPreviewImage from './videoPreviewImage';
import VideoPreviewTitle from './videoPreviewTitle';
import VideoPreviewSubtitle from './videoPreviewSubtitle';
import VideoPreviewTag from './videoPreviewTag';
import VideoPreviewTimer from './videoPreviewTimer';
export interface IVideoPreviewProps {
    /**
     * Sets the video preview size as large
     */
    large?: boolean;
    /**
     * Sets the video preview size as small
     */
    small?: boolean;
    /**
     * Additional or alternative styling
     */
    className?: string;
    /**
     * Function which will be triggered when user clicks on the play button
     */
    onClick?: () => void;
    children: React.ReactElement<typeof VideoPreviewImage | typeof VideoPreviewTitle | typeof VideoPreviewSubtitle | typeof VideoPreviewTag | typeof VideoPreviewTimer>[] | React.ReactElement<typeof VideoPreviewImage | typeof VideoPreviewTitle | typeof VideoPreviewSubtitle | typeof VideoPreviewTag | typeof VideoPreviewTimer>;
    [others: string]: any;
}
declare const VideoPreview: React.FC<IVideoPreviewProps>;
export { VideoPreviewImage, VideoPreviewTitle, VideoPreviewSubtitle, VideoPreviewTag, VideoPreviewTimer };
export default VideoPreview;
