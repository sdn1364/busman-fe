import Day from "./Day";

type VisibleCalendar = {
  days: { value: number; position: number }[];
};

const VisibleCalendar = ({ days }: VisibleCalendar) => {
  return (
    <>
      {days.map((day: { value: number; position: number }) => {
        return (
          <Day
            style={{
              transform: `translate(calc(var(--single-day-width) * ${day.position}), 0px)`,
            }}
            key={"day-" + day.value}
            day={day}
          />
        );
      })}
    </>
  );
};

export default VisibleCalendar;
