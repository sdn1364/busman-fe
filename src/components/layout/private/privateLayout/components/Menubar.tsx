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
import UseAuth from "@/hooks/auth/useAuth";
import useLogout from "@/hooks/auth/useLogout";
import { Bell, ChevronDown, Moon, Sun, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "@/assets/logo_white.svg";
import LogoBlack from "@/assets/logo_black.svg";
import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

const TopMenubar = () => {
  const { signout } = useLogout();
  const { setTheme, theme } = useTheme();
  const { user } = UseAuth();
  const [notificationOpen, setNotificationOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  return (
    <>
      <Menubar className="justify-between bg-slate-300 py-2 dark:bg-slate-900">
        <div className="flex flex-row items-center">
          <img
            src={theme === "light" ? LogoBlack : Logo}
            height={20}
            width={20}
            className="mx-3"
            alt=""
          />
          <h2 className="mr-5 font-bold">Elso Manager</h2>
          <MenubarMenu>
            <MenubarTrigger>Dashboard</MenubarTrigger>
            <MenubarContent>
              <MenubarItem onClick={() => navigate("/")}>Calendar</MenubarItem>
              <MenubarItem>Reports</MenubarItem>
            </MenubarContent>
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex h-10 w-[180px] flex-row justify-around rounded-none border-l border-r bg-slate-300 p-0 dark:bg-slate-900"
              >
                <span>Current business</span>
                <ChevronDown size={15} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[180px]">
              <DropdownMenuItem>Bus 01</DropdownMenuItem>
              <DropdownMenuItem>Bus 02</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Create new business</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            size="sm"
            variant="ghost"
            className="h-10 w-10 rounded-none border-r"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="h-10 w-10 rounded-none border-r"
            onClick={() => setNotificationOpen((val) => (val = !val))}
          >
            <Bell size={15} />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger className="">
              <Avatar className="h-10 w-14 rounded-none">
                {user?.user_metadata?.image && (
                  <AvatarImage
                    src={user?.user_metadata?.image}
                    alt="user avatar"
                  />
                )}
                <AvatarFallback className="bg-slate-300 dark:bg-slate-900">
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
      <Drawer
        open={notificationOpen}
        onOpenChange={setNotificationOpen}
        direction="right"
      >
        <DrawerContent className="bottom-0 left-auto right-0 flex h-full w-[400px] flex-col rounded-none rounded-l-[10px]">
          <DrawerClose className="absolute">
            <Button variant="ghost" size="icon-sm">
              <X size={15} />
            </Button>
          </DrawerClose>
          <DrawerHeader>
            <DrawerTitle className="text-center">Notifications</DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default TopMenubar;
