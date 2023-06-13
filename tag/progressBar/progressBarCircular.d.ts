import React from 'react';
interface IProgressBarCircularProps {
    step: number;
    steps: number;
    title?: string;
    helper?: string;
    className?: string;
    [others: string]: any;
}
declare const ProgressBarCircular: React.FC<IProgressBarCircularProps>;
export default ProgressBarCircular;
