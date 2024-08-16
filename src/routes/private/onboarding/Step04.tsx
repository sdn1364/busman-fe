import { Onboarding } from "@/components/layout/private/onboardingLayout/components/OnboardingCard";
import { Button, Stack, Text, Title } from "@/components/ui";
import { PathConstants as path } from "@/PathConstants";
import { useNavigate } from "react-router-dom";
const Step04 = () => {
  const navigate = useNavigate();

  const createBusiness = () => {};

  const goBack = () => {
    navigate(path.ONBOARDING + "/" + path.STEP3);
  };

  return (
    <Onboarding.Card>
      <Onboarding.Content className="flex flex-col space-y-10">
        <Stack>
          <Title order={1}>Review your info</Title>
          <Text>
            You're all set! Just take a moment to review everything and make
            sure it's correct
          </Text>
        </Stack>
      </Onboarding.Content>
      <Onboarding.Footer>
        <Button variant="ghost" onClick={goBack}>
          Previous
        </Button>
        <Button onClick={createBusiness}>Create business</Button>
      </Onboarding.Footer>
    </Onboarding.Card>
  );
};

export default Step04;
