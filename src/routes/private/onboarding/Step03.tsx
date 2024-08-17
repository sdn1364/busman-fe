import { Onboarding } from "@/components/layout/private/onboardingLayout/components/OnboardingCard";
import { Button, Stack, Text, Title } from "@/components/ui";
import { PathConstants as path } from "@/PathConstants";
import { useNavigate } from "react-router-dom";
import HourSelector from "./components/HourSelector";

const Step03 = () => {
  const navigate = useNavigate();

  const nextPath = path.ONBOARDING + "/" + path.STEP4;
  const backPath = path.ONBOARDING + "/" + path.STEP2;

  const addHours = () => {
    navigate(nextPath, { state: nextPath });
  };

  const goBack = () => {
    navigate(backPath, { state: backPath });
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
          <HourSelector name="monday" />
        </div>
        <Button className="w-24" variant="ghost">
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
