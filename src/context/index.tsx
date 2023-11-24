import React from "react";
import { SearchProvider } from "./SearchContext/SearchProvider";
import { FavoriteProvider } from "./FavoriteContext/FavoriteProvider";
import { CoinsProvider } from "./CoinsContext/CoinsProvider";

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CoinsProvider>
      <FavoriteProvider>
        <SearchProvider>{children}</SearchProvider>
      </FavoriteProvider>
    </CoinsProvider>
  );
}
