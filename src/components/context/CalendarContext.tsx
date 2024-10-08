import { createContext, PropsWithChildren, useState } from "react";

export const CalendarContext = createContext<CalendarContextType>({
  numberOfDays: 1,
} as CalendarContextType);

export const CalendarActionContext = createContext<CalendarActionContextType>(
  {} as CalendarActionContextType,
);

const CalendarProvider = ({ children }: PropsWithChildren) => {
  const [numberOfDays, setNumberOfDays] = useState<number>(7);
  const [todayPosition, setTodayPosition] = useState<number | null>(null);

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
        increaseNumberOfDays,
        decreaseNumberOfDays,
        setTodayPosition,
      }}
    >
      <CalendarContext.Provider
        value={{
          numberOfDays,
          todayPosition,
        }}
      >
        {children}
      </CalendarContext.Provider>
    </CalendarActionContext.Provider>
  );
};

export default CalendarProvider;
