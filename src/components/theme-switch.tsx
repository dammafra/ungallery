"use client";

import { Switch } from "@nextui-org/switch";
import { useIsSSR } from "@react-aria/ssr";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa6";

export const ThemeSwitch = ({}) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  return (
    <Switch
      id="SWWWW"
      size="sm"
      color="default"
      className="flex-row-reverse justify-between max-w-full w-full"
      defaultSelected={theme === "dark" || isSSR}
      onChange={() =>
        theme === "light" ? setTheme("dark") : setTheme("light")
      }
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <FaMoon className={className} />
        ) : (
          <FaSun className={className} />
        )
      }
    >
      Theme settings
    </Switch>
  );
};
