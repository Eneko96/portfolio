import React from 'react';
export interface ITRowProps {
    active?: boolean;
    disabled?: boolean;
    className?: string;
    onClick?: () => void;
    [others: string]: any;
}
declare const TRow: React.FC<ITRowProps>;
export default TRow;
