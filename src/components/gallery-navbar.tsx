import {
  NavbarContent,
  NavbarItem,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { AuthMenu } from "./auth-menu";
import { SearchBar } from "./search-bar";

export const GalleryNavbar = () => {
  return (
    <NextUINavbar isBordered maxWidth="xl" position="sticky">
      <NavbarContent>
        <NavbarItem className="hidden lg:flex" />

        <NavbarItem className="w-full">
          <SearchBar />
        </NavbarItem>

        <NavbarItem>
          <AuthMenu />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
