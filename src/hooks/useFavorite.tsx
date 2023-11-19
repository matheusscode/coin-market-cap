import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext/FavoriteCreate";

export const useFavoriteContext = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useFavoriteContext must be used within a ToolsProvider");
  }
  return context;
};
