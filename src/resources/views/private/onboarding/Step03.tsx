import { PathConstants as path } from "@/PathConstants";
import { Onboarding } from "@/resources/components/layout/private/onboardingLayout/components/OnboardingCard";
import { Button, Stack, Text, Title } from "@/resources/components/ui";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import HourSelector from "./components/HourSelector";

interface Hours {
  from: string;
  to: string;
}

interface WeekHours {
  monday: Hours;
  tuesday: Hours;
  wednesday: Hours;
  thursday: Hours;
  friday: Hours;
  saturday: Hours;
  sunday: Hours;
}

const Step03 = () => {
  const navigate = useNavigate();

  const nextPath = path.ONBOARDING + "/" + path.STEP4;
  const backPath = path.ONBOARDING + "/" + path.STEP2;

  const addHours = () => {
    navigate({ to: nextPath, params: { state: nextPath } });
  };

  const goBack = () => {
    navigate({ to: backPath, params: { state: backPath } });
  };

  const [hours, setHours] = useState({
    monday: { selected: true, from: "", to: "" },
    tuesday: { selected: true, from: "", to: "" },
    wednesday: { selected: true, from: "", to: "" },
    thursday: { selected: false, from: "", to: "" },
    friday: { selected: false, from: "", to: "" },
    saturday: { selected: false, from: "", to: "" },
    sunday: { selected: false, from: "", to: "" },
  });

  const handleHoursChange = (
    day: string,
    value: { from: string; to: string },
  ) => {
    setHours((prevHours) => ({
      ...prevHours,
      [day]: value,
    }));
  };

  const copyToAll = () => {
    Object.keys(hours).forEach((day) => {
      handleHoursChange(day as keyof WeekHours, hours.monday);
    });
  };

  return (
    <Onboarding.Card>
      <Onboarding.Content className="flex flex-col space-y-10">
        <Stack>
          <Title order={1}>When are you open?</Title>
          <Text>
            Almost done! Let's set your business hours so customers know when
            you're open.
          </Text>
        </Stack>
        <div className="grid grid-cols-7 gap-5">
          {Object.keys(hours).map((day) => (
            <HourSelector
              key={day}
              onChange={(e) => handleHoursChange(day, e)}
              value={hours[day as keyof WeekHours]}
              name={day}
            />
          ))}
        </div>
        <Button onClick={copyToAll} className="w-24" variant="ghost">
          Copy to all
        </Button>
      </Onboarding.Content>
      <Onboarding.Footer>
        <Button variant="ghost" c="primary" onClick={goBack}>
          Previous
        </Button>
        <Button c="primary" onClick={addHours}>
          Continue
        </Button>
      </Onboarding.Footer>
    </Onboarding.Card>
  );
};

export default Step03;
