import { NavbarContent, Navbar as NextUINavbar } from "@nextui-org/navbar";
import { BackButton } from "./back-button";
import { ThemeSwitch } from "./theme-switch";

export const DetailNavbar = () => {
  return (
    <NextUINavbar isBordered maxWidth="xl" position="sticky">
      <NavbarContent justify="start">
        <BackButton />
      </NavbarContent>

      <NavbarContent justify="end">
        <ThemeSwitch />
      </NavbarContent>
    </NextUINavbar>
  );
};
