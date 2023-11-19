import {  ReactNode, useState } from "react";
import {SearchContext} from "./SearchCreate";

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [searchCoin, setSearchCoin] = useState<string>('');

  const contextValue = {
    searchCoin,
    setSearchCoin,
  };

  return (
    <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>
  );
};
