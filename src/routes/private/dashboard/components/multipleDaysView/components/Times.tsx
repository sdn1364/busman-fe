import dayjs from "dayjs";

const Times = () => {
  return (
    <div
      className="times sticky -left-px top-0 z-[30] w-14 border-r bg-background"
      style={{
        height: "var(--column-height)",
        marginTop: "calc(-1 * var(--day-header-height))",
      }}
    >
      {[...Array.from({ length: 23 })].map((_, i) => {
        const offset = (i + 1) * 12;

        const time = dayjs()
          .startOf("day")
          .add(i + 1, "hour");

        return (
          <div
            key={i}
            className="absolute right-0 flex h-px w-2 bg-slate-200 dark:bg-slate-800"
            style={{
              top: `calc(var(--day-header-height) + var(--tick-height) * ${offset})`,
            }}
          >
            <div className="absolute -top-2 right-full mr-1 flex flex-row font-light text-slate-400 dark:text-slate-500">
              <p className="text-[0.6rem]">{time.format("hh:mm")}</p>
              <p className="text-[0.55rem]">{time.format("a")}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Times;