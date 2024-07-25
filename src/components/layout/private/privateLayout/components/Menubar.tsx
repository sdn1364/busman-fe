import { Menubar } from "@/components/ui/menubar";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import {
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "@radix-ui/react-menubar";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@radix-ui/react-select";

const TopMenubar = () => {
  return (
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
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
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
  );
};

export default TopMenubar;
