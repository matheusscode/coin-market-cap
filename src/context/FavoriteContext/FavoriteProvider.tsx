import { ReactNode, useEffect, useState } from "react";
import { FavoriteContext } from "./FavoriteCreate";

interface FavoriteProviderProps {
  children: ReactNode;
}

export const FavoriteProvider = ({ children }: FavoriteProviderProps) => {
  const [favoriteCoin, setFavoriteCoin] = useState<string[]>([]);

  useEffect(() => {
    setFavoriteCoin(
      JSON.parse(localStorage.getItem("favoriteCoins") as string) || []
    );
  }, []);

  const toggleFavoriteCoin = (name: string) => {
    const isFavorite = favoriteCoin.includes(name);
    let updatedFavorites: string[];

    if (isFavorite) {
      updatedFavorites = favoriteCoin.filter((coin) => coin !== name);
    } else {
      updatedFavorites = [...favoriteCoin, name];
    }

    localStorage.setItem("favoriteCoins", JSON.stringify(updatedFavorites));
    setFavoriteCoin(updatedFavorites);
  };

  const isCoinSavedAsFavorite = (coinName: string): boolean =>
    favoriteCoin.includes(coinName);

  const contextValue = {
    favoriteCoin,
    setFavoriteCoin,
    toggleFavoriteCoin,
    isCoinSavedAsFavorite,
  };

  return (
    <FavoriteContext.Provider value={contextValue}>
      {children}
    </FavoriteContext.Provider>
  );
};
