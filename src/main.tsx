import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "@/navigation/Router";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "./components/ui/toaster";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Toaster />
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={Router} />
    </PersistGate>
  </Provider>
);
