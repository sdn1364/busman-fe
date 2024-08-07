import ReactDOM from "react-dom/client";
import "./index.css";
import App from "@/App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "@/components/context/AuthContext.tsx";
import { ThemeProvider } from "@/components/context/theme-provider.tsx";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BusinessProvider } from "./components/context/BusinessContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AuthProvider>
          <BusinessProvider>
            <App />
          </BusinessProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </BrowserRouter>,
);
