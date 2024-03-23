import {
  NavbarContent,
  NavbarItem,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { AuthMenu } from "./auth-menu";
import { BackButton } from "./back-button";

export const DetailNavbar = () => {
  return (
    <NextUINavbar isBordered maxWidth="xl" position="sticky">
      <NavbarContent>
        <NavbarItem className="w-full">
          <BackButton />
        </NavbarItem>

        <NavbarItem>
          <AuthMenu />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
