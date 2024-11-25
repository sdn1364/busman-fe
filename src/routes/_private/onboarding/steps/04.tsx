import { Step04 } from "@/resources/views/private";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_private/onboarding/steps/04")({
  component: Step04,
});
