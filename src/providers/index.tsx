"use client";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";
import { SearchProvider } from "./search/search.provider";

export interface ProvidersProps extends PropsWithChildren {
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        <SearchProvider>{children}</SearchProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
