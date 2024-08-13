type DayJs = dayjs.Dayjs;

type CalendarContextType = {
  numberOfDays: number;
};

type CalendarActionContextType = {
  setNumberOfDays: Dispatch<number>;
  increaseNumberOfDays: () => void;
  decreaseNumberOfDays: () => void;
};

type DayType = {
  day: DayJs;
  position: number;
};
