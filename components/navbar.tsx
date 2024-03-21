import { NavbarContent, Navbar as NextUINavbar } from "@nextui-org/navbar";

import { ThemeSwitch } from "@/components/theme-switch";
import { SearchBar } from "./search-bar";

export const Navbar = () => {
  return (
    <NextUINavbar isBordered maxWidth="xl" position="sticky">
      <NavbarContent className="gap-16">
        <SearchBar />
        <ThemeSwitch />
      </NavbarContent>
    </NextUINavbar>
  );
};
