import useCalendar from "@/hooks/useCalendar";
import dayjs from "dayjs";

const useDays = (days: dayjs.Dayjs[]) => {
  const { numberOfDays } = useCalendar();
  const startDate: dayjs.Dayjs = dayjs("2005-1-1");
  const baseDayPosition = dayjs.duration(days[0].diff(startDate)).asDays();
  const singleDayWidth = (screen.availWidth - 56) / numberOfDays;

  const startOfThisWeek = dayjs().startOf("week");
  const endDate: dayjs.Dayjs = dayjs("2040-12-29");

  const numberOfDaysInTheCalendar: number = dayjs
    .duration(endDate.diff(startDate))
    .asDays();

  const numberOfDaysUpToStartOfWeek = dayjs
    .duration(startOfThisWeek.diff(startDate))
    .asDays();

  const currentScrollPoint =
    Math.floor(numberOfDaysUpToStartOfWeek) * singleDayWidth;
  const baseScrollPosition = Math.floor(baseDayPosition) * singleDayWidth;

  return {
    baseScrollPosition,
    currentScrollPoint,
    singleDayWidth,
    numberOfDaysInTheCalendar,
  };
};

export default useDays;
