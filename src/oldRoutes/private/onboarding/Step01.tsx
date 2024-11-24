import { PathConstants as path } from "@/PathConstants";
import { Onboarding } from "@/resources/components/layout/private/onboardingLayout/components/OnboardingCard";
import {
  Button,
  InputField,
  Stack,
  Text,
  TextAreaField,
  Title,
} from "@/resources/components/ui";
import WithAuth from "@/routes/WithAuth";
import { useNavigate } from "react-router-dom";

const Step01 = WithAuth(() => {
  const navigate = useNavigate();

  const nextPath = path.ONBOARDING + "/" + path.STEP2;

  const addBusiness = () =>
    navigate(nextPath, {
      state: nextPath,
    });

  return (
    <Onboarding.Card>
      <Onboarding.Content className="flex flex-col space-y-10">
        <Stack>
          <Title order={1}>Let's Get Started with Your Business Info</Title>
          <Text>
            Hi there! First, we need a few details about your business. This
            will help us set up your profile and make it easy for customers to
            find you
          </Text>
        </Stack>
        <InputField
          label="What's your business called?"
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
        <Button c="primary" onClick={addBusiness}>
          Continue
        </Button>
      </Onboarding.Footer>
    </Onboarding.Card>
  );
});

export default Step01;
