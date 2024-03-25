import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { BackButton } from "./back-button";
import { UserMenu } from "./user-menu";

export const FavouritesNavbar = () => {
  return (
    <NextUINavbar isBordered maxWidth="xl" position="sticky">
      <NavbarContent>
        <NavbarItem>
          <BackButton />
        </NavbarItem>

        <NavbarBrand className="font-bold text-2xl">Favourites</NavbarBrand>

        <NavbarItem>
          <UserMenu />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
