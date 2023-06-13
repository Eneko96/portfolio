import React from 'react';
export interface ICalendarProps {
    locale?: string;
    /**
     * Show the month of the default date
     */
    date: number;
    month: number;
    /**
     * Disable days in calendar
     */
    disabledDates?: number[];
    /**
     * Selected days in calendar
     */
    selectedDates?: number[];
    /**
     * In case the selected dates build up a range, intermediate days of those two dates
     */
    activeDates?: number[];
    /**
     * Minimum date to be able to select
     */
    minDate?: number;
    /**
     * Maximum date to be able to select
     */
    maxDate?: number;
    /**
     * On change function when click another day
     */
    onSelectDate?: (date: number, e?: React.MouseEvent) => void;
    [others: string]: any;
}
declare const CalendarMonth: React.FC<ICalendarProps>;
export default CalendarMonth;
