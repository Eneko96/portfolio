import React from 'react';
export { default as Step } from './step';
export declare type TStatus = 'success' | 'pending' | 'disabled' | 'error' | 'default' | 'active';
export interface IStep {
    /**
     * Name of the step that will be displayed on the component
     */
    name: string;
    /**
     * Helper of the step
     */
    detail?: string;
    /**
     * Status of the component that will be reflected on itself
     */
    status?: TStatus;
    [others: string]: any;
}
export interface IStepperProps {
    /**
     * direction of the stepper
     */
    vertical?: boolean;
    numbered?: boolean;
    /**
     * Handler for click events
     */
    onClickStep?: (stepIndex: number) => void;
    /**
     * additional className
     */
    className?: string;
    [others: string]: any;
}
declare const Stepper: React.FC<IStepperProps>;
export default Stepper;
