import React from "react";
import { SearchProvider } from "./SearchContext/SearchProvider";

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SearchProvider>{children}</SearchProvider>;
}
