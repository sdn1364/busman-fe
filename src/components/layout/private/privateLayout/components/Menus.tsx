import { Menubar } from "@/components/ui";
import { PathConstants } from "@/PathConstants";
import { memo, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const Menus = memo(() => {
  const navigate = useNavigate();

  const menus = useMemo(
    () => [
      {
        trigger: "Dashboard",
        path: "",
        content: [
          {
            label: "Calendar",
            path: PathConstants.CALENDAR,
          },
        ],
      },
      {
        trigger: "Settings",
        path: PathConstants.SETTINGS,
        content: [
          {
            label: "Business",
            path: PathConstants.BUSINESS,
          },
        ],
      },
    ],
    [],
  );

  return menus.map((menu, i) => (
    <Menubar.Menu key={i}>
      <Menubar.Trigger>{menu.trigger}</Menubar.Trigger>
      <Menubar.Content>
        {menu.content.map((content, j) => (
          <Menubar.Item
            key={j}
            onClick={() => navigate(menu.path + "/" + content.path)}
          >
            {content.label}
          </Menubar.Item>
        ))}
      </Menubar.Content>
    </Menubar.Menu>
  ));
});

export default Menus;
