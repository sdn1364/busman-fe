import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PropsWithChildren } from "react";
import AuthProvider from "./AuthProvider";
import BusinessProvider from "./BusinessProvider";
import ThemeProvider from "./ThemeProvider";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 0,
    },
  },
});

const AllProviders = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AuthProvider>
          <BusinessProvider> {children}</BusinessProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
export default AllProviders;
