import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const BusinessDetails = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Business details</CardTitle>
      </CardHeader>
      <CardContent>asdfasd</CardContent>
      <CardFooter className="flex justify-between">
        <Button disabled>Save</Button>
      </CardFooter>
    </Card>
  );
};

export default BusinessDetails;
