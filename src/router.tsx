import { createRouter } from "@tanstack/react-router";
import { queryClient } from "./QueryClient";
import { routeTree } from "./routeTree.gen";

export const router = createRouter({
  routeTree,
  context: {
    queryClient,
    auth: undefined!,
    business: undefined!,
  },
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
});
