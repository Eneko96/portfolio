import React from 'react';
interface IProgressBarSmallProps {
    step: number;
    steps: number;
    title?: string;
    helper?: string;
    className?: string;
    [others: string]: any;
}
declare const ProgressBarSmall: React.FC<IProgressBarSmallProps>;
export default ProgressBarSmall;
