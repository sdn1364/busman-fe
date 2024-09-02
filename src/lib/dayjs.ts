import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";
import duration from "dayjs/plugin/duration";
import isCurrentDay from "dayjs/plugin/isToday";
import updateLocale from "dayjs/plugin/updateLocale";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";

dayjs.extend(isCurrentDay);

dayjs.extend(weekday);
dayjs.extend(updateLocale);
dayjs.extend(dayOfYear);
dayjs.extend(weekOfYear);
dayjs.extend(duration);

dayjs.updateLocale("en", {
  weekStart: 1,
});

export const now = dayjs();
export const currentYear = now.year();
export const currentMonth = now.month();
export const currentDayOfWeek = now.day();
export const currentDayOfYear = now.dayOfYear();
export const currentWeekOfYear = now.week();
export const startOfTime = dayjs(new Date(2005, 1, 1));
export const endOfTime = now.add(16, "year");
export const startOfThisWeek = now.startOf("week");
export const startOfThisMonth = now.startOf("month");
export const startOfThisYear = now.startOf("year");
export const numberOfAllDayInTime = dayjs
  .duration(endOfTime.diff(startOfTime))
  .asDays();

// formatting functions

export const getMonthFullName = (day: DayJs) => day.format("MMMM");
export const getMonthShortName = (day: DayJs) => day.format("MMM");
export const getMonthNumber = (day: DayJs) => day.format("MM");
export const getFullYear = (day: DayJs) => day.format("YYYY");
export const formattedDate = (date: DayJs) => date.format("YYYY-MM-D");
export const getWeekOfTheYear = (day: DayJs) => day.week();
export const getDayNumber = (day: DayJs) => day.format("D");
export const getDayShortName = (day: DayJs) => day.format("ddd");
export const getDayFullName = (day: DayJs) => day.format("dddd");
export const getDiffFromStart = (day: DayJs) =>
  dayjs.duration(day.diff(startOfTime)).asDays();

//calendar generation functions
export const isToday = (day: DayJs) => day.isToday();
