"use client";

import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { useAuth } from "@providers/auth/use-auth";
import { firebaseService } from "@services/firebase.service";
import clsx from "clsx";
import { FcGoogle } from "react-icons/fc";
import { ThemeSwitch } from "./theme-switch";

export const AuthMenu = () => {
  const { user, setUser } = useAuth();

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          as="button"
          isBordered
          size="sm"
          className="transition-transform"
          color={user ? "primary" : "default"}
          name={user?.displayName || undefined}
          src={user?.photoURL || undefined}
        />
      </DropdownTrigger>

      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem
          key="profile"
          className={clsx("h-14 gap-2", !!user ? "flex" : "hidden")}
          showDivider
          isReadOnly
        >
          <p className="font-semibold">{user?.displayName}</p>
          <p>{user?.email}</p>
        </DropdownItem>

        <DropdownItem
          key="profile"
          className={clsx("h-14 gap-2", !!user ? "hidden" : "flex")}
          showDivider
          startContent={<FcGoogle size={22} />}
          onPress={() => firebaseService.signIn().then(setUser)}
        >
          Sign in with Google
        </DropdownItem>

        <DropdownItem
          className={clsx(!!user ? "flex" : "hidden")}
          // TODO:
          href="#"
        >
          Favourites
        </DropdownItem>

        <DropdownItem isReadOnly>
          <ThemeSwitch />
        </DropdownItem>

        <DropdownItem
          className={clsx(!!user ? "flex" : "hidden")}
          onPress={() => firebaseService.signOut().then(setUser)}
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
