import { Onboarding } from "@/components/layout/private/onboardingLayout/components/OnboardingCard";
import {
  Button,
  InputField,
  Stack,
  Text,
  TextAreaField,
  Title,
} from "@/components/ui";
import { PathConstants as path } from "@/PathConstants";
import { useNavigate } from "react-router-dom";
const Step02 = () => {
  const navigate = useNavigate();

  const nextPath = path.ONBOARDING + "/" + path.STEP3;
  const backPath = path.ONBOARDING + "/" + path.STEP1;

  const addLocation = () => {
    navigate(nextPath, { state: nextPath });
  };

  const goBack = () => {
    navigate(backPath, { state: backPath });
  };
  return (
    <Onboarding.Card>
      <Onboarding.Content className="flex flex-col space-y-10">
        <Stack>
          <Title order={1}>Where's your main spot?</Title>
          <Text>
            Great!, Now, let's add your primary location. This help customers
            know where to find you.
          </Text>
        </Stack>
        <InputField
          label="What's the address of your main location?"
          placeholder="Business name"
          type="name"
        />
        <TextAreaField
          label="Tell us a bit about what you do"
          placeholder="Description"
          type="description"
        />
      </Onboarding.Content>
      <Onboarding.Footer>
        <Button variant="ghost" onClick={goBack}>
          Previous
        </Button>
        <Button onClick={addLocation}>Continue</Button>
      </Onboarding.Footer>
    </Onboarding.Card>
  );
};

export default Step02;
