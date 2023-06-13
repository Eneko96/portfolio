import React from 'react';
export interface ITreeElement {
    /**
     * Name of the Tree Element
     */
    name: string;
    /**
     * For disabling the Tree Element
     */
    disabled?: boolean;
    /**
     * click event on developers needs
     */
    onClick?: (e?: React.MouseEvent) => void;
    /**
     * Alternative className on Tree.Element
     */
    className?: string;
    /**
     * prop for displaying an icon if needed
     */
    icon?: string;
    /**
     * By default left sided arrow, can be passed an oposite side (both will show up if they have children)
     */
    arrow?: 'left' | 'right' | 'none';
    [others: string]: any;
}
declare const TreeViewElement: React.FC<ITreeElement>;
export default TreeViewElement;
