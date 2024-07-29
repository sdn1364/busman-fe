import { createContext, PropsWithChildren } from "react";

type CalendarContextType = {};

export const CalendarContext = createContext<CalendarContextType>({});

const CalendarProvider = ({ children }: PropsWithChildren) => {
  return (
    <CalendarContext.Provider value={{}}>{children}</CalendarContext.Provider>
  );
};

export default CalendarProvider;
