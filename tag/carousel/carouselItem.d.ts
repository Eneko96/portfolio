import React from 'react';
export interface ICarouselItem {
    /**
     * Set for Disable the Item Display on the Carousel
     */
    disabled?: boolean;
    /**
     * For alternative or Additional styling
     */
    className?: string;
    /**
     * Required To Identify the element
     */
    id: string;
    [others: string]: any;
}
declare const CarouselItem: React.FC<ICarouselItem>;
export default CarouselItem;
