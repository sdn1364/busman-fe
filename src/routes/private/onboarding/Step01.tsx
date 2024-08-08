import { Card, InputField, TextAreaField, Button } from "@/components/ui";
import WithAuth from "@/routes/WithAuth";

const Step01 = WithAuth(() => {
  return (
    <Card className="h-full w-[700px] justify-between">
      <Card.Header>
        <Card.Title>Let's Get Started with Your Business Info</Card.Title>
        <Card.Description>
          Hi there! First, we need a few details about your business. This will
          help us set up your profile and make it easy for customers to find you
        </Card.Description>
      </Card.Header>
      <Card.Content>
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
      </Card.Content>
      <Card.Footer className="justify-between">
        <Button>Continue</Button>
        <Button>Continue</Button>
      </Card.Footer>
    </Card>
  );
});

export default Step01;
