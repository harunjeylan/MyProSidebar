import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MyProSidebarProvider } from "./contexts/sidebarContext";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MyProSidebarProvider>
      <App />
    </MyProSidebarProvider>
  </StrictMode>
);
