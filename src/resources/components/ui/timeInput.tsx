import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useEffect, useReducer } from "react";
import NumberRotator from "./numberRotator";

const Actions = {
  ADD_HOUR: "ADD_HOUR",
  SUBTRACT_HOUR: "SUBTRACT_HOUR",
  ADD_MINUTE: "ADD_MINUTE",
  SUBTRACT_MINUTE: "SUBTRACT_MINUTE",
  TOGGLE_MERIDIEM: "TOGGLE_MERIDIEM",
  SET_STATE: "SET_STATE",
} as const;

export type TimeState = {
  hour: number;
  minute: number;
  meridiem: "am" | "pm";
};
type Action = { type: keyof typeof Actions; payload?: TimeState };

const timeReducer = (state: TimeState, action: Action): TimeState => {
  switch (action.type) {
    case Actions.SET_STATE:
      return action.payload!;
    case Actions.ADD_HOUR:
      return { ...state, hour: state.hour < 12 ? state.hour + 1 : 0 };
    case Actions.SUBTRACT_HOUR:
      return { ...state, hour: state.hour > 0 ? state.hour - 1 : 12 };
    case Actions.ADD_MINUTE:
      return {
        ...state,
        minute: state.minute < 59 ? state.minute + 1 : 0,
      };
    case Actions.SUBTRACT_MINUTE:
      return {
        ...state,
        minute: state.minute > 0 ? state.minute - 1 : 59,
      };
    case Actions.TOGGLE_MERIDIEM:
      return {
        ...state,
        meridiem: state.meridiem === "am" ? "pm" : "am",
      };
    default:
      return state;
  }
};
interface ITimeInput {
  label: string;
  disabled: boolean;
  className?: string;
  onChange: (t: string) => void;
}

const TimeInput = ({ disabled, label, className, onChange }: ITimeInput) => {
  const initialState: TimeState = {
    hour: 0,
    minute: 0,
    meridiem: "am",
  };
  const [time, dispatch] = useReducer(timeReducer, initialState);

  useEffect(() => {
    if (onChange && !disabled) {
      onChange(time.hour + ":" + time.minute + " " + time.meridiem);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  return (
    <div className={cn(className, "flex w-full flex-col")}>
      <Label className={cn(disabled && "opacity-50")}>{label}</Label>
      <div className="grid grid-cols-3 content-center justify-items-center gap-1">
        <NumberRotator
          disabled={disabled}
          up={() => dispatch({ type: Actions.SUBTRACT_HOUR })}
          down={() => dispatch({ type: Actions.ADD_HOUR })}
        >
          {time.hour}
        </NumberRotator>
        <NumberRotator
          disabled={disabled}
          up={() => dispatch({ type: Actions.SUBTRACT_MINUTE })}
          down={() => dispatch({ type: Actions.ADD_MINUTE })}
        >
          {time.minute}
        </NumberRotator>
        <NumberRotator
          disabled={disabled}
          up={() => dispatch({ type: Actions.TOGGLE_MERIDIEM })}
          down={() => dispatch({ type: Actions.TOGGLE_MERIDIEM })}
        >
          {time.meridiem}
        </NumberRotator>
      </div>
    </div>
  );
};

export default TimeInput;
