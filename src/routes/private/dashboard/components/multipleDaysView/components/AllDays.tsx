import dayjs from "dayjs";
import useDays from "../useDays";
import Column from "./Column";

const AllDays = ({ days }: { days: dayjs.Dayjs[] }) => {
  const { baseScrollPosition } = useDays(days);
  return (
    <>
      {days.map((day, index) => (
        <Column
          style={{
            transform: `translate(calc(${baseScrollPosition}px + ${index} * var(--single-day-width)) , 0px)`,
          }}
          key={day.valueOf()}
          day={day}
        />
      ))}
    </>
  );
};

export default AllDays;
