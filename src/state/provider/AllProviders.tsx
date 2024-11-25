import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PropsWithChildren } from "react";
import AuthProvider from "./AuthProvider";
import ThemeProvider from "./ThemeProvider";

const AllProviders = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AuthProvider>{children}</AuthProvider>
      </ThemeProvider>
    </>
  );
};

export default AllProviders;
