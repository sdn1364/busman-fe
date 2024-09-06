import { Event } from "@/components/shared/index";
import { now } from "@/lib/dayjs";
import { cn } from "@/lib/utils";
import { useDroppable } from "@dnd-kit/core";
import dayjs from "dayjs";
import { CSSProperties } from "react";

type Props = {
  day: DayJs;
  style?: CSSProperties;
};

const Day = ({ day, style }: Props) => {
  const dayObj: DayJs = dayjs(dayjs().dayOfYear(day).format());
  const { isOver, setNodeRef } = useDroppable({
    id: "day-" + dayObj.valueOf(),
  });

  const styles = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      className={cn(
        "absolute top-0 flex border-r",
        (dayObj.day() !== 6 || dayObj.day() !== 0) && "bg-background",
        (dayObj.day() === 6 || dayObj.day() === 0) &&
          "bg-slate-100 dark:bg-slate-900",
      )}
      style={{
        width: "var(--single-day-width)",
        height: "var(--single-day-height)",
        ...style,
        ...styles,
      }}
    >
      <div className="events absolute h-full w-full">
        {dayObj === now && (
          <Event title="name of the event" time="09:00am - 10:00am" />
        )}
      </div>
      <div className="relative h-full w-full">
        <div className="absolute inset-0">
          {[...Array.from({ length: 23 })].map((_, i) => {
            const offset = (i + 1) * 12;
            return (
              <div
                key={i}
                className="absolute left-0 flex h-px w-full bg-slate-200 dark:bg-slate-800"
                style={{
                  top: `calc(var(--day-header-height) + var(--tick-height) * ${offset})`,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Day;
