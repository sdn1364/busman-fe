import { Card, Stack, Text } from "@/resources/components/ui";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { NotFound } from "./errors";

const ErrorElement = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <NotFound />;
    }

    if (error.status === 401) {
      return <div>You aren't authorized to see this</div>;
    }

    if (error.status === 503) {
      return <div>Looks like our API is down</div>;
    }

    if (error.status === 418) {
      return <div>🫖</div>;
    }
  }
  return (
    <Stack>
      <Text>Something went wrong</Text>
      <Card>
        <Card.Content className="rounded border border-red-500 bg-red-500/10 p-5 text-red-500"></Card.Content>
      </Card>
    </Stack>
  );
};

export default ErrorElement;
