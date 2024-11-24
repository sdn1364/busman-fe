import { CircleDashed } from "lucide-react";
import { ReactNode } from "react";
import { Stack, Text } from "../ui";

type Props = {
  text: string;
  icon?: ReactNode;
};

const Empty = ({ text, icon }: Props) => {
  return (
    <div className="flex h-full min-h-96 w-full flex-1 items-center justify-center">
      <Stack align="center">
        {icon ?? <CircleDashed />}
        <Text>{text}</Text>
      </Stack>
    </div>
  );
};

export default Empty;
