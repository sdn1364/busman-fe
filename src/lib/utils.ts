import { type ClassValue, clsx } from "clsx";
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";
import updateLocale from "dayjs/plugin/updateLocale";
import weekday from "dayjs/plugin/weekday";
import dayOfYear from "dayjs/plugin/dayOfYear";

dayjs.extend(weekday);
dayjs.extend(updateLocale);
dayjs.extend(dayOfYear);

dayjs.updateLocale("en", {
  weekStart: 1,
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateCalendar = (month: number, year: number) => {
  const startOfMonth = dayjs(new Date(year, month, 1));
  const endOfMonth = dayjs(new Date(year, month + 1, 0));

  const startDay = startOfMonth.day(); // gets the day number of the week
  const daysInMonth = endOfMonth.date();

  const prevMonthEnd = dayjs(new Date(year, month, 0)).date();
  const nextMonthStart = 1;

  const calendar = [];
  let week = [];

  for (let i = startDay - 1; i >= 0; i--) {
    week.push({ day: prevMonthEnd - i, currentMonth: false });
  }

  for (let day = 1; day <= daysInMonth; day++) {
    week.push({ day, currentMonth: true });

    if (week.length === 7) {
      calendar.push(week);
      week = [];
    }
  }

  if (week.length > 0) {
    let nextMonthDay = nextMonthStart;
    while (week.length < 7) {
      week.push({ day: nextMonthDay, currentMonth: false });
      nextMonthDay++;
    }
    calendar.push(week);
  }
  return calendar;
};

export const createYearCalendar = (year: number): dayjs.Dayjs[] => {
  const calendar = [];

  for (let month = 0; month < 12; month++) {
    const daysInMonth = dayjs(new Date(year, month + 1, 0)).date();
    for (let day = 1; day <= daysInMonth; day++) {
      calendar.push(dayjs(new Date(year, month, day)).startOf("day"));
    }
  }

  return calendar;
};

export const generateMonthCalendar = (month: number, year: number) => {
  const startOfMonth = dayjs(new Date(year, month, 1));
  const endOfMonth = dayjs(new Date(year, month + 1, 0));

  const startDay = startOfMonth.weekday(); // gives the start of month in week number
  const daysInMonth = endOfMonth.date();

  const calendar = [];
  let week = [];

  for (let i = 0; i < startDay; i++) {
    week.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    week.push(day);
    if (week.length === 7) {
      calendar.push(week);
      week = [];
    }
  }

  if (week.length > 0) {
    while (week.length < 7) {
      week.push(null);
    }
    calendar.push(week);
  }
  return calendar;
};

export const generateYearCalendar = (year: number) => {
  const calendar = [];

  for (let month = 0; month < 12; month++) {
    calendar.push(generateMonthCalendar(month, year));
  }

  return calendar;
};

export function capitilize(word: string) {
  return word[0].toLocaleUpperCase() + word.slice(1);
}

export const now = dayjs();
export const currentYear = now.year();
export const currentMonth = now.month();
export const currentDayOfWeek = now.day();
export const currentDayOfYear = now.dayOfYear();

export const formatedDate = (date: dayjs.Dayjs) => {
  return date.format("YYYY-MM-D");
};

export const createDaysCalendar = (numberOfDays: number) => {
  const margin = 5;
  const days: dayjs.Dayjs[] = [];
  // what day is today => now
  // get the first of the week date

  const startOfWeek = now.startOf("week");

  for (let i = -margin; i < 0; i++) {
    days.push(startOfWeek.add(i, "day"));
  }

  for (let i = 0; i < numberOfDays + margin; i++) {
    days.push(startOfWeek.add(i, "day"));
  }

  return days;
};
