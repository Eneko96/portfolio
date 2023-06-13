import React from 'react';
export { default as EmptyStateDescription } from './emptyStateDescription';
export { default as EmptyStateImg } from './emptyStateImg';
export { default as EmptyStateTitle } from './emptyStateTitle';
export interface IEmptyStateProps {
    className?: string;
}
declare const EmptyState: React.FC<IEmptyStateProps>;
export default EmptyState;
