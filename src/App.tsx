import { QueryClient } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { Suspense } from "react";
import { useAuth } from "./hooks";
import { routeTree } from "./routeTree.gen";
import AllProviders from "./state/provider/AllProviders";

const queryClient = new QueryClient();

const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
});

function InnerApp() {
  const auth = useAuth();
  return <RouterProvider router={router} context={{ auth }} />;
}

function App() {
  return (
    <AllProviders>
      <Suspense fallback={<div>loading...</div>}>
        <InnerApp />
      </Suspense>
    </AllProviders>
  );
}

export default App;
