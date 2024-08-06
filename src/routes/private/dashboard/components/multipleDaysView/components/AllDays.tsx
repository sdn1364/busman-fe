import dayjs from "dayjs";
import useDays from "../useDays";
import Column from "./Column";

const AllDays = ({ days }: { days: dayjs.Dayjs[] }) => {
  const { baseScrollPosition, singleDayWidth } = useDays(days);
  return (
    <>
      {days.map((day, index) => {
        const transform = baseScrollPosition! + index * singleDayWidth;

        return (
          <Column
            style={{
              transform: `translate(${transform}px , 0px)`,
            }}
            key={day.valueOf()}
            day={day}
          />
        );
      })}
    </>
  );
};

export default AllDays;
