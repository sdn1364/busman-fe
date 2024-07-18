import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Outlet, useNavigate } from "react-router-dom";

const PrivateLayout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Menubar className="justify-between">
        <MenubarMenu>
          <MenubarTrigger>Settings</MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={() => navigate("/settings/business")}>
              Business
            </MenubarItem>
            <MenubarItem>Online booking</MenubarItem>
            <MenubarItem>Subscription</MenubarItem>
            <MenubarItem>Locations</MenubarItem>
            <MenubarItem>Payment</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Current business" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">bus 01</SelectItem>
            <SelectItem value="dark">bus 02</SelectItem>
          </SelectContent>
        </Select>
      </Menubar>
      <Outlet />
    </div>
  );
};

export default PrivateLayout;
