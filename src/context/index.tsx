import React from "react";
import { SearchProvider } from "./SearchContext/SearchProvider";
import { FavoriteProvider } from "./FavoriteContext/FavoriteProvider";

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FavoriteProvider>
      <SearchProvider>{children}</SearchProvider>
    </FavoriteProvider>
  );
}
