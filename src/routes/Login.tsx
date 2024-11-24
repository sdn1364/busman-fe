import LoginView from "@/resources/views/public/login/Login.view";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/Login")({
  component: LoginView,
});
