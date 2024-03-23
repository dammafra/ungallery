"use client";

import { NavbarContent, Navbar as NextUINavbar } from "@nextui-org/navbar";
import { SearchBar } from "./search-bar";
import { ThemeSwitch } from "./theme-switch";

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
