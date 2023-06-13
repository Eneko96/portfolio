import React from 'react';
import DragAndDropCardHeader from '../card/cardHeader';
export { default as DragAndDropCardHeader } from '../card/cardHeader';
export interface IDragAndDropCardProps {
    /**
     * Identifies the card
     */
    id?: string;
    /**
     * Add class to card
     */
    className?: string;
    /**
     * Add options for dropdown option
     */
    options?: {
        id?: string;
        label: string;
        onClick?: () => void;
        [others: string]: any;
    }[];
    /**
     * Set placeholder type
     */
    placeholder?: boolean;
    /**
     * Set completed styles
     */
    completed?: boolean;
    /**
     * Set draggable option
     */
    draggable?: boolean;
    /**
     * Set active option
     */
    active?: boolean;
    /**
     * Set header of card
     */
    children: React.ReactElement<typeof DragAndDropCardHeader>;
    [others: string]: any;
}
declare const DragAndDropCard: React.FC<IDragAndDropCardProps>;
export default DragAndDropCard;
