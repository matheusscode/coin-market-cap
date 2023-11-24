import { createContext } from "react";
import { CoinProps } from "../../types";

interface CoinsContextProps {
  data: CoinProps[] | undefined;
  isLoading: boolean;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
  currency: string;
}

export const CoinsContext = createContext<CoinsContextProps>(
  {} as CoinsContextProps
);
