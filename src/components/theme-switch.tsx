"use client";

import { Button } from "@nextui-org/button";
import { useIsSSR } from "@react-aria/ssr";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const ThemeSwitch = ({}) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  return (
    <Button
      isIconOnly
      variant="faded"
      aria-label="theme-switch"
      onPress={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
    >
      {theme === "dark" || isSSR ? (
        <MdLightMode size={22} />
      ) : (
        <MdDarkMode size={22} />
      )}
    </Button>
  );
};
