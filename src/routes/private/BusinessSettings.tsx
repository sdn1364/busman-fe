import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import WithAuth from "../WithAuth";
import Page from "@/components/ui/Page";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BusinessSetting = WithAuth(() => {
  return (
    <Page>
      <div className="w-[1024px]">
        <Tabs defaultValue="details">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="images">Images</TabsTrigger>
            <TabsTrigger value="working_hours">Working hours</TabsTrigger>
            <TabsTrigger value="default_settings">Default settings</TabsTrigger>
            <TabsTrigger value="social_media">Social media</TabsTrigger>
          </TabsList>
          <TabsContent value="details">
            <Card>
              <CardHeader>
                <CardTitle>Business details</CardTitle>
              </CardHeader>
              <CardContent>asdfasd</CardContent>
              <CardFooter className="flex justify-between">
                <Button disabled>Save</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="images">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </Page>
  );
});

export default BusinessSetting;
