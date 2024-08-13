import Day from "./Day";

type VisibleCalendar = {
  days: {
    day: DayJs;
    position: number;
  }[];
};

const VisibleCalendar = ({ days }: VisibleCalendar) => {
  return (
    <>
      {days.map(({ day, position }: { day: DayJs; position: number }) => {
        return (
          <Day
            style={{
              transform: `translate(${position}px, 0px)`,
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
