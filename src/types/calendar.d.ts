type DayJs = dayjs.Dayjs;

type CalendarContextType = {
  numberOfDays: number;
  todayPosition: number | null;
};

type CalendarActionContextType = {
  setNumberOfDays: Dispatch<number>;
  setTodayPosition: Dispatch<number | null>;
  increaseNumberOfDays: () => void;
  decreaseNumberOfDays: () => void;
};

type DayType = {
  day: number;
};
