import { NavbarContent, Navbar as NextUINavbar } from "@nextui-org/navbar";
import { SearchBar } from "./search-bar";
import { ThemeSwitch } from "./theme-switch";

export const GalleryNavbar = () => {
  return (
    <NextUINavbar isBordered maxWidth="xl" position="sticky">
      <NavbarContent justify="start" className="!flex-[2]">
        <SearchBar />
      </NavbarContent>

      <NavbarContent justify="end">
        <ThemeSwitch />
      </NavbarContent>
    </NextUINavbar>
  );
};
