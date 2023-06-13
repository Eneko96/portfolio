import React from 'react';
import { DateTime } from 'luxon';
export interface ICalendarProps {
    date: DateTime;
    selected?: boolean;
    disabled?: boolean;
    active?: boolean;
    onSelectDate: (date: number, e: React.MouseEvent<HTMLButtonElement>) => void;
    [others: string]: any;
}
declare const CalendarDay: React.FC<ICalendarProps>;
export default CalendarDay;
