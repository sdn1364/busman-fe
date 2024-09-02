import { useEffect, useState } from "react";
import NumberRotator from "../../numberRotator";

const Hour = ({
  disabled,
  onChange,
}: {
  disabled?: boolean;
  onChange: (h: number) => void;
}) => {
  const [hour, setHour] = useState(0);

  useEffect(() => {
    if (!disabled) {
      onChange(hour);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hour]);

  return (
    <NumberRotator
      disabled={disabled}
      up={() => setHour((hour) => (hour > 0 ? hour - 1 : 12))}
      down={() => setHour((hour) => (hour < 12 ? hour + 1 : 0))}
    >
      {hour}
    </NumberRotator>
  );
};

export default Hour;
