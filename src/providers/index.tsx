"use client";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";
import { AuthProvider } from "./auth/auth.provider";
import { SearchProvider } from "./search/search.provider";

export interface ProvidersProps extends PropsWithChildren {
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push} className="h-screen">
      <NextThemesProvider {...themeProps}>
        <AuthProvider>
          <SearchProvider>{children}</SearchProvider>
        </AuthProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
