import { Card, Fieldset } from "@/resources/components/ui";
import { Button } from "@/resources/components/ui/button/button";

const BusinessDetails = () => {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Business details</Card.Title>
      </Card.Header>
      <Card.Content>
        <Fieldset label="danger zone">danger zone</Fieldset>
      </Card.Content>
      <Card.Footer className="flex justify-between">
        <Button disabled>Save</Button>
      </Card.Footer>
    </Card>
  );
};

export default BusinessDetails;
