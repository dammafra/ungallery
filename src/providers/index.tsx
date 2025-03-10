"use client";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";
import { AuthProvider } from "./auth/auth.provider";
import { FavouritesProvider } from "./favourites/favourites.provider";

export interface ProvidersProps extends PropsWithChildren {
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push} className="h-full">
      <NextThemesProvider {...themeProps}>
        <AuthProvider>
          <FavouritesProvider>{children}</FavouritesProvider>
        </AuthProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
