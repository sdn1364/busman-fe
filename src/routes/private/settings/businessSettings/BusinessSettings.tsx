import { Page, Tabs } from "@/components/ui";
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
          <Tabs.List className="w-full justify-start">
            {tabs.map((tab) => (
              <Tabs.Trigger key={tab.name} value={tab.name.replace(" ", "_")}>
                {tab.name}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {tabs.map(({ name, component: Component }) => (
            <Tabs.Content
              key={name + "_" + "content"}
              value={name.replace(" ", "_")}
            >
              <Component />
            </Tabs.Content>
          ))}
        </Tabs>
      </div>
    </Page>
  );
};

export default BusinessSetting;
