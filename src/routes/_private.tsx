import BusinessProvider from "@/state/provider/BusinessProvider";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_private")({
  beforeLoad: ({ context, location }) => {
    console.log(context);
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: () => {
    return (
      <BusinessProvider>
        <Outlet />
      </BusinessProvider>
    );
  },
});
