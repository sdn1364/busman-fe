import { Step03 } from "@/resources/views/private";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_private/onboarding/steps/03")({
  component: Step03,
});
