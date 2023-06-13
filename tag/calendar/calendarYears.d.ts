import React from 'react';
export interface ICalendarProps {
    year: number;
    minDate?: number;
    maxDate?: number;
    onSelectYear: (year: number, e: React.MouseEvent<HTMLButtonElement>) => void;
    [others: string]: any;
}
declare const CalendarYears: React.FC<ICalendarProps>;
export default CalendarYears;
