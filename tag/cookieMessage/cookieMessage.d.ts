import React from 'react';
export { default as CookieMessageBody } from './cookieMessageBody';
export { default as CookieMessageFooter } from './cookieMessageFooter';
export { default as CookieMessageHeader } from './cookieMessageHeader';
export { default as CookieMessageRight } from './cookieMessageRight';
export { default as CookieMoreInfo } from './cookieMoreInfo';
export interface ICookieMessageProps {
    /** Extra classes if needed */
    className?: string;
    moreInfo?: boolean;
    onToggleMoreInfo?: () => any;
    [key: string]: any;
}
export interface ICookieCommonProps {
    className?: string;
    [key: string]: any;
}
declare const CookieMessage: React.FC<ICookieMessageProps>;
export default CookieMessage;
