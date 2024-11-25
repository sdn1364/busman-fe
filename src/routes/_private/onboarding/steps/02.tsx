import { Step02 } from "@/resources/views/private";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_private/onboarding/steps/02")({
  component: Step02,
});
