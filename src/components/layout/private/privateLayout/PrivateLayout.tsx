import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
      <Menubar className="justify-between py-2">
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
        <div className="flex flex-row items-center gap-5">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Current business" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">bus 01</SelectItem>
              <SelectItem value="dark">bus 02</SelectItem>
            </SelectContent>
          </Select>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Menubar>
      <Outlet />
    </div>
  );
};

export default PrivateLayout;
