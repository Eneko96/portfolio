import React from 'react';

export interface ITHeadProps {
  className?: string
  [others: string]: any
}

export const THead: React.FC<ITHeadProps> = ({ children, className, ...rest }) => (
  <thead {...rest} className={className || ''}>{children}</thead>
);