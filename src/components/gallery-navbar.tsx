import {
  NavbarContent,
  NavbarItem,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { Spinner } from "@nextui-org/spinner";
import { Suspense } from "react";
import { SearchBar } from "./search-bar";
import { UserMenu } from "./user-menu";

export const GalleryNavbar = () => {
  return (
    <NextUINavbar isBordered maxWidth="xl" position="sticky">
      <NavbarContent>
        <NavbarItem className="hidden lg:flex" />

        <NavbarItem className="w-full">
          <Suspense fallback={<Spinner />}>
            <SearchBar />
          </Suspense>
        </NavbarItem>

        <NavbarItem>
          <UserMenu />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
