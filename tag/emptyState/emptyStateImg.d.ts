import React from 'react';
interface IEmptyStateImage extends React.HTMLAttributes<HTMLImageElement> {
    src: string;
    className?: string;
}
declare const Img: React.FC<IEmptyStateImage>;
export default Img;
