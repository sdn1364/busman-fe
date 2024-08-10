type CalendarContextType = {
  numberOfDays: number;
  calendarView: string;
  currentDate: dayjs.Dayjs;
};

type CalendarActionContextType = {
  setNumberOfDays: Dispatch<number>;
  setCalendarView: Dispatch<string>;
  setCurrentDate: Dispatch<string>;
  increaseNumberOfDays: () => void;
  decreaseNumberOfDays: () => void;
};
