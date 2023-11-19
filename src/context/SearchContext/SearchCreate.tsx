import { createContext } from "react";

interface SearchContextProps {
  setSearchCoin: React.Dispatch<React.SetStateAction<string>>;
  searchCoin: string;
}

export const SearchContext = createContext<SearchContextProps >({} as SearchContextProps);
