import { useTheme } from "@/components/context/theme-provider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
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
import UseAuth from "@/hooks/auth/useAuth";
import useLogout from "@/hooks/auth/useLogout";
import { Moon, Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TopMenubar = () => {
  const { signout } = useLogout();
  const { setTheme, theme } = useTheme();
  const { user } = UseAuth();

  const navigate = useNavigate();

  return (
    <Menubar className="justify-between py-2">
      <div className="flex flex-row items-center">
        <h2 className="mr-5 font-bold">Elso Manager</h2>
        <MenubarMenu>
          <MenubarTrigger onClick={() => navigate("/")}>
            Dashboard
          </MenubarTrigger>
        </MenubarMenu>
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
      </div>
      <div className="flex flex-row items-center gap-0">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Current business" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">bus 01</SelectItem>
            <SelectItem value="dark">bus 02</SelectItem>
          </SelectContent>
        </Select>
        <Button
          size="sm"
          variant="ghost"
          className="rounded-none border-r px-5"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger className="px-2">
            <Avatar>
              {user?.user_metadata?.image && (
                <AvatarImage
                  src={user?.user_metadata?.image}
                  alt="user avatar"
                />
              )}
              <AvatarFallback>
                <span>{user?.user_metadata?.first_name[0]} </span>
                <span>{user?.user_metadata?.last_name[0]}</span>
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => signout()}>
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Menubar>
  );
};

export default TopMenubar;
