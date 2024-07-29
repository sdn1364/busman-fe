import { Button } from "@/components/ui/button";
import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";

dayjs.extend(weekOfYear);

const Timebar = () => {
  return (
    <div className="timebar flex h-14 w-full flex-row items-center justify-between border-b px-5 py-2">
      <div className="flex flex-row items-end gap-1">
        <p className="text-3xl font-[900]">{dayjs().format("MMMM")}</p>
        <p className="text-xl font-bold">{dayjs().year()}</p>
        <p className="light:text-gray-400 text-xs dark:text-gray-600">
          Week {dayjs().week()}
        </p>
      </div>
      <div>
        <Button size="sm" variant="secondary">
          Today
        </Button>
      </div>
    </div>
  );
};

export default Timebar;
