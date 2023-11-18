import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme.chakra.ts";

import AppRoutes from "./routes/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ChakraProvider>
);
