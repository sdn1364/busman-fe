import { Button } from "@/components/ui/button";
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
          <Button size="icon-xs" variant="secondary">
            <Diff size={10} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="flex w-auto flex-row space-x-1 p-1">
          <Button
            size="icon-xs"
            variant="secondary"
            onClick={decreaseNumberOfDays}
          >
            <Minus size={10} />
          </Button>
          <input
            className="w-10 text-center"
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
