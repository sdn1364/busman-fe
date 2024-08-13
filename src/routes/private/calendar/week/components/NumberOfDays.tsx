import { ActionButton } from "@/components/ui";
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
    <div className="absolute right-2 top-1 z-[50]">
      <Popover>
        <PopoverTrigger asChild>
          <ActionButton size="xs" variant="neutral" className="shadow-md">
            <Diff size={10} />
          </ActionButton>
        </PopoverTrigger>
        <PopoverContent
          side="left"
          className="-mr-7 flex w-auto flex-row space-x-1 rounded-md bg-slate-200 p-1 shadow-md dark:bg-slate-800"
        >
          <ActionButton
            size="xs"
            variant="neutral"
            onClick={decreaseNumberOfDays}
          >
            <Minus size={10} />
          </ActionButton>
          <Input
            className="h-7 w-12 bg-slate-200 px-1 text-center dark:bg-slate-800"
            type="text"
            value={numberOfDays}
          />
          <ActionButton
            size="xs"
            variant="neutral"
            onClick={increaseNumberOfDays}
          >
            <Plus size={10} />
          </ActionButton>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default NumberOfDays;
