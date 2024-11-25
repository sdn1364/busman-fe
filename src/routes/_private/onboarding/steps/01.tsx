import { Step01 } from "@/resources/views/private";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_private/onboarding/steps/01")({
  component: Step01,
});
