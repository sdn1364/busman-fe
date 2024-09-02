import dayjs from "dayjs";
import Heading from "./Heading";
const DayHeaders = ({ days }: { days: number[] }) => {
  return (
    <div
      className="date-headers sticky left-0 top-0 z-30 -mt-14 w-full border-b"
      style={{
        height: "var(--day-header-height)",
      }}
    >
      <div className="relative h-full w-full">
        {days.map((day: number) => {
          const date: DayJs = dayjs(day);
          return (
            <Heading
              key={"header-" + day}
              date={date}
              style={{
                transform: `translate(calc(56px, 0px)`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DayHeaders;
