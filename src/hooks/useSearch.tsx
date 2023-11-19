import { useContext } from "react";
import { SearchContext } from "../context/SearchContext/SearchCreate";

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a ToolsProvider");
  }
  return context;
};

