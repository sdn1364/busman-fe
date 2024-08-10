type CalendarContextType = {
  numberOfDays: number;
};

type CalendarActionContextType = {
  setNumberOfDays: Dispatch<number>;
  increaseNumberOfDays: () => void;
  decreaseNumberOfDays: () => void;
};
