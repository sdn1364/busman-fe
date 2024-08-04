import { Dispatch } from "react";
import { useState } from "react";
import { createContext, PropsWithChildren } from "react";

type CalendarContextType = {
  numberOfDays: number;
  calendarView: string;
};

type CalendarActionContextType = {
  setNumberOfDays: Dispatch<number>;
  setCalendarView: Dispatch<string>;
  increaseNumberOfDays: () => void;
  decreaseNumberOfDays: () => void;
};

export const CalendarContext = createContext<CalendarContextType>({
  numberOfDays: 1,
  calendarView: "day",
} as CalendarContextType);

export const CalendarActionContext = createContext<CalendarActionContextType>(
  {} as CalendarActionContextType,
);

const CalendarProvider = ({ children }: PropsWithChildren) => {
  const [numberOfDays, setNumberOfDays] = useState<number>(7);
  const [calendarView, setCalendarView] = useState<string>("week");

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
        increaseNumberOfDays,
        decreaseNumberOfDays,
      }}
    >
      <CalendarContext.Provider
        value={{
          numberOfDays,
          calendarView,
        }}
      >
        {children}
      </CalendarContext.Provider>
    </CalendarActionContext.Provider>
  );
};

export default CalendarProvider;
