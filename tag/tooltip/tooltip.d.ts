import React from 'react';
declare type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
interface TooltipProps {
    id?: string;
    /**
     *  Is a reference for parent element
     */
    parentRef: React.RefObject<HTMLElement>;
    /**
     * Apply diferent styles for tooltip
     */
    className?: string;
    renderAsPortal?: boolean;
    placement?: TooltipPosition;
    [others: string]: any;
}
declare const Tooltip: React.FC<TooltipProps>;
export default Tooltip;
