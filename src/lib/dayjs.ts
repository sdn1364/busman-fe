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
export const numberOfAllDayInTime = dayjs
  .duration(endOfTime.diff(startOfTime))
  .asDays();

// formatting functions

export const getMonthFullName = (day: DayJs) => day.format("MMMM");
export const getMonthShortName = (day: DayJs) => day.format("MMM");
export const getMonthNumber = (day: DayJs) => day.format("MM");
export const getFullYear = (day: DayJs) => day.format("YYYY");
export const formatedDate = (date: DayJs) => date.format("YYYY-MM-D");
export const getWeekOfTheYear = (day: DayJs) => day.week();
export const getDayNumber = (day: DayJs) => day.format("D");
export const getDayShortName = (day: DayJs) => day.format("ddd");
export const getDayFullName = (day: DayJs) => day.format("dddd");
export const getNumberOfDaysFromStart = (day: DayJs) =>
  dayjs.duration(day.diff(startOfTime)).asDays();

//calendar generation functions
export const isToday = (day: DayJs) => day.isToday();

export const addDay = (day: DayJs, i: number = 1) => {
  return day.add(i, "day");
};

export const addToStartOfThisWeek = (i: number) => {
  return addDay(startOfThisWeek, i);
};

export const createWeek = (startOfweek: DayJs) => {
  const week = [];
  for (let i = 0; i < 7; i++) {
    week.push(startOfweek.add(i, "day"));
  }
  return week;
};

export const generateCalendarWithDays = (numberOfDays: number) => {
  const margin: number = 5;
  const widthOfSingleDay = screen.availWidth / numberOfDays;

  const startDay = now.subtract(margin, "day");

  const numberOfDaysFromSartUntilNow = getNumberOfDaysFromStart(startDay);

  const baseDayPosition = numberOfDaysFromSartUntilNow * widthOfSingleDay;

  const days: DayType[] = [];

  days.push({
    day: startDay,
    position: baseDayPosition * widthOfSingleDay,
  });

  const pushTodays = (i: number) => {
    days.push({
      day: addToStartOfThisWeek(i),
      position: baseDayPosition + i * widthOfSingleDay,
    });
  };

  for (let i = -margin + 1; i < 0; i++) {
    pushTodays(i);
  }

  for (let i = 0; i < numberOfDays + margin; i++) {
    pushTodays(i);
  }

  return days;
};

export const createCalendarWithWeeks = () => {
  const margin: number = 5;
  const days: dayjs.Dayjs[][] = [];

  // factor in the current monthS

  for (let i = -margin; i < 0; i++) {
    const startOfWeek = now.add(i, "week").startOf("week");
    days.push(createWeek(startOfWeek));
  }
  for (let i = 0; i < 6 + margin; i++) {
    const startOfWeek = now.add(i, "week").startOf("week");
    days.push(createWeek(startOfWeek));
  }
  return days;
};
