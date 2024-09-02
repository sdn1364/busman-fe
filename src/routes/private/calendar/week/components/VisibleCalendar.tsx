import Day from "./Day";

type VisibleCalendar = {
  days: number[];
};

const VisibleCalendar = ({ days }: VisibleCalendar) => {
  return (
    <>
      {days.map((day: number) => {
        return (
          <Day
            style={{
              transform: `translate(calc(var(--single-day-width) * ${day}), 0px)`,
            }}
            key={"day-" + day.valueOf()}
            day={day}
          />
        );
      })}
    </>
  );
};

export default VisibleCalendar;
