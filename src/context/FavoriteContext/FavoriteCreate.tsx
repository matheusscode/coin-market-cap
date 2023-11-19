import { createContext } from "react";

interface FavoriteContextProps {
  setFavoriteCoin: React.Dispatch<React.SetStateAction<string[]>>;
  favoriteCoin: string[];
  toggleFavoriteCoin: (name: string) => void;
  isCoinSavedAsFavorite: (coinName: string) => boolean;
}

export const FavoriteContext = createContext<FavoriteContextProps>(
  {} as FavoriteContextProps
);
