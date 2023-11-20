import { ReactNode, useEffect, useState, useMemo } from "react";
import { FavoriteContext } from "./FavoriteCreate";
import { useToast } from "@chakra-ui/react";

const TOAST_COLORS = {
  info: "red",
  success: "green",
};

interface FavoriteProviderProps {
  children: ReactNode;
}

export const FavoriteProvider = ({ children }: FavoriteProviderProps) => {
  const [favoriteCoin, setFavoriteCoin] = useState<string[]>(() => {
    const storedFavorites = localStorage.getItem("favoriteCoins");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });
  const toast = useToast();

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteCoins");
    if (storedFavorites) {
      setFavoriteCoin(JSON.parse(storedFavorites));
    }
  }, []);

  const showToast = (
    action: string,
    status: "info" | "success",
    color: string
  ) => {
    toast({
      title: action,
      status,
      duration: 2000,
      isClosable: true,
      position: "top-right",
      containerStyle: {
        background: color,
        borderRadius: "10px",
      },
    });
  };

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

    const action = isFavorite
      ? "Moeda removida dos favoritos com sucesso"
      : "Moeda adicionada aos favoritos com sucesso";
    const status: "info" | "success" = isFavorite ? "info" : "success";
    const color = TOAST_COLORS[status];

    showToast(action, status, color);
  };

  const isCoinSavedAsFavorite = (coinName: string): boolean =>
    favoriteCoin.includes(coinName);

  const contextValue = useMemo(
    () => ({
      favoriteCoin,
      setFavoriteCoin,
      toggleFavoriteCoin,
      isCoinSavedAsFavorite,
    }),
    [favoriteCoin, toggleFavoriteCoin, isCoinSavedAsFavorite]
  );

  return (
    <FavoriteContext.Provider value={contextValue}>
      {children}
    </FavoriteContext.Provider>
  );
};
