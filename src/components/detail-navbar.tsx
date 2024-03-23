import {
  NavbarContent,
  NavbarItem,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { BackButton } from "./back-button";
import { UserMenu } from "./user-menu";

export const DetailNavbar = () => {
  return (
    <NextUINavbar isBordered maxWidth="xl" position="sticky">
      <NavbarContent>
        <NavbarItem className="w-full">
          <BackButton />
        </NavbarItem>

        <NavbarItem>
          <UserMenu />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
