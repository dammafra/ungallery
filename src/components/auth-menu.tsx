"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { User } from "@nextui-org/user";
import { useAuth } from "@providers/auth/use-auth";
import { authService } from "@services/auth.service";
import clsx from "clsx";
import { FcGoogle } from "react-icons/fc";
import { ThemeSwitch } from "./theme-switch";

export const AuthMenu = () => {
  const { user, setUser } = useAuth();

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <User
          name=""
          avatarProps={{
            as: "button",
            isBordered: true,
            size: "sm",
            className: "transition-transform",
            color: user ? "primary" : "default",
            name: user?.displayName || undefined,
            src: user?.photoURL || undefined,
            alt: "your profile picture",
          }}
          classNames={{
            name: "hidden",
            description: "hidden",
            wrapper: "hidden",
            base: "flex justify-center items-center",
          }}
        />
      </DropdownTrigger>

      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem
          textValue="your name and email"
          className={clsx("h-14 gap-2", !!user ? "flex" : "hidden")}
          showDivider
          isReadOnly
        >
          <p className="font-semibold">{user?.displayName}</p>
          <p>{user?.email}</p>
        </DropdownItem>

        <DropdownItem
          className={clsx("h-14 gap-2", !!user ? "hidden" : "flex")}
          showDivider
          startContent={<FcGoogle size={22} />}
          onPress={() => authService.signIn().then(setUser)}
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

        <DropdownItem isReadOnly textValue="theme switch">
          <ThemeSwitch />
        </DropdownItem>

        <DropdownItem
          className={clsx(!!user ? "flex" : "hidden")}
          onPress={() => authService.signOut().then(setUser)}
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
