import React from 'react';
export interface IContentSwitcherItemProps {
    id: string;
    /**
     * Identify if this tab is selected
     */
    active?: string;
    disabled?: boolean;
    icon?: any;
    title: string;
    badge?: number;
    [others: string]: any;
}
declare const ContentSwitcherItem: React.FC<IContentSwitcherItemProps>;
export default ContentSwitcherItem;
