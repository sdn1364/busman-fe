import { createServer, Model } from "miragejs";
import { personFactory } from "./user.factory";

export function makeServer({ environment = "test" }) {
  return createServer({
    environment,
    factories: {
      user: personFactory,
    },
    models: {
      user: Model.extend<Partial<User>>({}),
    },
    routes() {
      this.namespace = "api";
      this.get("/users");
    },
    seeds(server) {
      server.createList("user", 20);
    },
  });
}
