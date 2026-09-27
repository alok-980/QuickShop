import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoute from "./app/routes/AppRoute.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <AppRoute />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
        toastClassName="!bg-surface-900 !border !border-surface-600/50 !text-ink-100"
      />
    </Provider>
  </QueryClientProvider>,
);
