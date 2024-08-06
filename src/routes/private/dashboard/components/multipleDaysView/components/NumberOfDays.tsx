import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useCalendar from "@/hooks/useCalendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Diff, Minus, Plus } from "lucide-react";

const NumberOfDays = () => {
  const { increaseNumberOfDays, decreaseNumberOfDays, numberOfDays } =
    useCalendar();
  return (
    <div className="numberOfDays absolute right-2 top-1 z-[50]">
      <Popover>
        <PopoverTrigger asChild>
          <Button size="icon-xs" variant="secondary" className="shadow-md">
            <Diff size={10} />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          side="left"
          className="-mr-7 flex w-auto flex-row space-x-1 rounded-md bg-slate-200 p-1 shadow-md dark:bg-slate-800"
        >
          <Button
            size="icon-xs"
            variant="secondary"
            onClick={decreaseNumberOfDays}
          >
            <Minus size={10} />
          </Button>
          <Input
            className="h-7 w-12 bg-slate-200 px-1 text-center dark:bg-slate-800"
            type="text"
            value={numberOfDays}
          />
          <Button
            size="icon-xs"
            variant="secondary"
            onClick={increaseNumberOfDays}
          >
            <Plus size={10} />
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default NumberOfDays;
