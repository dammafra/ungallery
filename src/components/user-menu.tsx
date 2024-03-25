"use client";

import { Chip } from "@nextui-org/chip";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { User } from "@nextui-org/user";
import { useAuth } from "@providers/auth/use-auth";
import { useFavourites } from "@providers/favourites/use-favourites";
import { authService } from "@services/auth.service";
import clsx from "clsx";
import { FaRightFromBracket } from "react-icons/fa6";
import { AuthButton } from "./auth-button";
import { ThemeSwitch } from "./theme-switch";

export const UserMenu = () => {
  const { user, setUser } = useAuth();
  const { favourites } = useFavourites();

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        {/* TODO: use avatar component when issue is closed */}
        {/* https://github.com/nextui-org/nextui/issues/2474 */}
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
          isReadOnly
          showDivider
          textValue="your name and email"
          className={clsx(
            "h-14 gap-2 data-[hover=true]:bg-transparent cursor-auto",
            !!user ? "flex" : "hidden"
          )}
        >
          <p className="font-semibold">{user?.displayName}</p>
          <p>{user?.email}</p>
        </DropdownItem>

        <DropdownItem
          isReadOnly
          showDivider
          className={clsx(
            "data-[hover=true]:bg-transparent",
            !!user ? "hidden" : "flex"
          )}
        >
          <AuthButton />
        </DropdownItem>

        <DropdownItem
          href="/favourites"
          endContent={<Chip>{favourites.length}</Chip>}
          className={clsx(!!user ? "flex" : "hidden")}
        >
          Favourites
        </DropdownItem>

        <DropdownItem isReadOnly textValue="theme switch">
          <ThemeSwitch />
        </DropdownItem>

        <DropdownItem
          onPress={() => authService.signOut().then(setUser)}
          endContent={
            <FaRightFromBracket className="text-default-foreground" size={14} />
          }
          className={clsx(!!user ? "flex" : "hidden")}
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
