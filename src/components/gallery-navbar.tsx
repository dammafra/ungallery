import {
  NavbarContent,
  NavbarItem,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { SearchBar } from "./search-bar";
import { UserMenu } from "./user-menu";

export const GalleryNavbar = () => {
  return (
    <NextUINavbar isBordered maxWidth="xl" position="sticky">
      <NavbarContent>
        <NavbarItem className="hidden lg:flex" />

        <NavbarItem className="w-full">
          <SearchBar />
        </NavbarItem>

        <NavbarItem>
          <UserMenu />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
