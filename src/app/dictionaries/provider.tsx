"use client";

import type { ReactNode } from "react";
import { I18nProviderClient } from "./client";
import { useParams } from "next/navigation";

type ProviderProps = {
  children: ReactNode;
};

export function Provider({ children }: ProviderProps) {
  const { locale } = useParams();
  return (
    <I18nProviderClient locale={`${locale}`} fallback={<p></p>}>
      {children}
    </I18nProviderClient>
  );
}
