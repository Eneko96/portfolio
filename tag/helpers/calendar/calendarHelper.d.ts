export declare const findDateInArray: (date: number, array: number[]) => undefined;
export declare const getDaysInMonth: (date: Date) => number;
export declare const getDayOfTheWeek: (date: Date) => number;
export declare const getFirstDayOfMonth: (date: Date) => Date;
export declare const getLastDayOfMonth: (date: Date) => Date;
export declare const getPreviousMonth: (date: Date) => Date;
export declare const getNextMonth: (date: Date) => Date;
export declare const getDisplayedDaysPrevMonth: (date: Date) => Date[];
export declare const getDisplayedDaysNextMonth: (date: Date) => Date[];
export declare const getDifferenceInDays: (dateFrom: Date, dateTo: Date) => number;
export declare const getDaysFromTo: (dateFrom: Date, dateTo: Date) => Date[];
export declare const getDatePlussDays: (date: Date, days: number) => Date;
export declare const compareDateDays: (date1: number, date2: number) => boolean;
/**
 *
 * @param date1
 * @param date2
 * @returns Array with dates between date1 and date2 without this dates.
 */
export declare const getDatesBetween2Dates: (date1: number, date2: number) => number[];
export declare const getYearsBetweenDates: (minDate?: number, maxDate?: number) => number[];
