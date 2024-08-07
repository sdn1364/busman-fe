import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Page from "@/components/ui/Page";
import BusinessDetails from "./components/BusinessDetails";

const BusinessSetting = () => {
  const tabs = [
    {
      name: "Details",
      component: BusinessDetails,
    },
    {
      name: "Images",
      component: () => <div>this is images tab</div>,
    },
    {
      name: "Working hours",
      component: () => <div>this is working hours tab</div>,
    },
    {
      name: "Default settings",
      component: () => <div>this is default settings tab</div>,
    },
    {
      name: "Social media",
      component: () => <div>this is images tab</div>,
    },
  ];
  return (
    <Page>
      <div className="w-[1024px]">
        <Tabs defaultValue="details">
          <TabsList className="w-full justify-start">
            {tabs.map((tab) => (
              <TabsTrigger key={tab.name} value={tab.name.replace(" ", "_")}>
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map(({ name, component: Component }) => (
            <TabsContent
              key={name + "_" + "content"}
              value={name.replace(" ", "_")}
            >
              <Component />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Page>
  );
};

export default BusinessSetting;
