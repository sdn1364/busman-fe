import dayjs from "dayjs";
import Heading from "./Heading";
const DayHeaders = ({
  days,
}: {
  days: { value: number; position: number }[];
}) => {
  return (
    <div
      className="date-headers sticky left-0 top-0 z-30 -mt-14 w-full border-b"
      style={{
        height: "var(--day-header-height)",
      }}
    >
      <div className="relative h-full w-full">
        {days.map((day: { value: number; position: number }) => {
          const date: DayJs = dayjs(day.value);
          return (
            <Heading
              key={"header-" + day.value}
              date={date}
              style={{
                transform: `translate(calc(var(--single-day-width) * ${day.position}), 0px)`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DayHeaders;
