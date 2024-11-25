import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { Suspense } from "react";
import { useAuth } from "./hooks";
import { queryClient } from "./QueryClient";
import { router } from "./router";
import AllProviders from "./state/provider/AllProviders";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const auth = useAuth();
  console.log("auth", auth);
  return (
    <Suspense fallback={<div>loading...</div>}>
      <QueryClientProvider client={queryClient}>
        <AllProviders>
          <RouterProvider router={router} context={{ auth }} />
        </AllProviders>
      </QueryClientProvider>
    </Suspense>
  );
  return;
}

export default App;
