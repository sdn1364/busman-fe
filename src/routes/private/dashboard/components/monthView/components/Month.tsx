import dayjs from "dayjs";

const Month = ({
  month,
  name,
}: {
  month: (number | null)[][];
  name: string;
}) => {
  const currentMonth = dayjs().format("MMMM");
  const currentDay = +dayjs().format("D");

  return (
    <div className="flex flex-col gap-1">
      <p
        className={`${currentMonth === name ? "text-lg font-[900] text-red-500" : ""}`}
      >
        {name}
      </p>
      {month.map((week, index) => (
        <div key={index} className="flex flex-row gap-1">
          {week.map((day, index) => {
            return (
              <div
                key={index}
                className={`flex h-8 w-8 items-center justify-center rounded ${day ? "ho cursor-pointer bg-slate-100 hover:bg-slate-300 dark:bg-slate-900 hover:dark:bg-slate-700" : ""} ${day === currentDay && currentMonth === name ? "!bg-red-600 font-[900] text-white hover:bg-red-700" : "font-light"}`}
              >
                {day}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Month;
