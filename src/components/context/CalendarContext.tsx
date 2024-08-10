import { now } from "@/lib/utils";
import dayjs from "dayjs";
import { createContext, PropsWithChildren, useState } from "react";

export const CalendarContext = createContext<CalendarContextType>({
  numberOfDays: 1,
  calendarView: "day",
  currentDate: ["", ""],
} as CalendarContextType);

export const CalendarActionContext = createContext<CalendarActionContextType>(
  {} as CalendarActionContextType,
);

const CalendarProvider = ({ children }: PropsWithChildren) => {
  const [numberOfDays, setNumberOfDays] = useState<number>(7);
  const [calendarView, setCalendarView] = useState<string>("week");
  const [currentDate, setCurrentDate] = useState<dayjs.Dayjs>(now);

  const increaseNumberOfDays = () => {
    setNumberOfDays(numberOfDays < 31 ? numberOfDays + 1 : 31);
  };
  const decreaseNumberOfDays = () => {
    setNumberOfDays(numberOfDays > 1 ? numberOfDays - 1 : 1);
  };

  return (
    <CalendarActionContext.Provider
      value={{
        setNumberOfDays,
        setCalendarView,
        setCurrentDate,
        increaseNumberOfDays,
        decreaseNumberOfDays,
      }}
    >
      <CalendarContext.Provider
        value={{
          numberOfDays,
          calendarView,
          currentDate,
        }}
      >
        {children}
      </CalendarContext.Provider>
    </CalendarActionContext.Provider>
  );
};

export default CalendarProvider;
