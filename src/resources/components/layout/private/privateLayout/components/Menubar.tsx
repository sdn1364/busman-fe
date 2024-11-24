import {
  Avatar,
  Button,
  DropdownMenu,
  Group,
  Menubar,
} from "@/resources/components/ui";

import UseAuth from "@/hooks/auth/useAuth";
import useLogout from "@/hooks/auth/useLogout";
import useBusiness from "@/hooks/business/useBusiness";
import useGetBusinesses from "@/hooks/business/useGetBusinesses";
import { Logo, ToggleTheme } from "@/resources/components/shared";
import { Sheet } from "@/resources/components/ui/sheet";
import { Bell, ChevronDown } from "lucide-react";
import { useState } from "react";
import Menus from "./Menus";

const TopMenubar = () => {
  const { signout } = useLogout();
  const { user } = UseAuth();
  const [notificationOpen, setNotificationOpen] = useState<boolean>(false);
  const { data, isSuccess } = useGetBusinesses();
  const { business } = useBusiness();

  return (
    <>
      <Menubar className="justify-between">
        <Group align="center">
          <Logo size={15} className="mx-3" />
          {/* <h2 className="mr-5 font-extrabold">ELSO</h2> */}
          <Menus />
        </Group>
        <Group align="center" gap={0}>
          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              <Button
                variant="ghost"
                className="flex h-10 w-[180px] flex-row justify-around rounded-none border-l border-r"
              >
                {business ? business.name : <span>Current business</span>}

                <ChevronDown size={15} />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="w-[180px]">
              {isSuccess &&
                data.map((bus) => (
                  <DropdownMenu.Item key={bus.id}>{bus.name}</DropdownMenu.Item>
                ))}
              <DropdownMenu.Separator />
              <DropdownMenu.Item>Create new business</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
          <ToggleTheme />
          <Button
            size="sm"
            variant="ghost"
            className="h-10 w-10 rounded-none border-r"
            onClick={() => setNotificationOpen((val) => (val = !val))}
          >
            <Bell size={15} />
          </Button>
          <DropdownMenu>
            <DropdownMenu.Trigger>
              <Avatar className="h-10 w-14 rounded-none">
                {user?.user_metadata?.image && (
                  <Avatar.Image
                    src={user?.user_metadata?.image}
                    alt="user avatar"
                  />
                )}
                <Avatar.Fallback className="bg-slate-300 dark:bg-slate-900">
                  <span>{user?.user_metadata?.first_name[0]} </span>
                  <span>{user?.user_metadata?.last_name[0]}</span>
                </Avatar.Fallback>
              </Avatar>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Label>My Account</DropdownMenu.Label>
              <DropdownMenu.Separator />
              <DropdownMenu.Item>Settings</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item onClick={() => signout()}>
                Log out
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
        </Group>
      </Menubar>
      <Sheet open={notificationOpen} onOpenChange={setNotificationOpen}>
        <Sheet.Content></Sheet.Content>
      </Sheet>
    </>
  );
};

export default TopMenubar;
