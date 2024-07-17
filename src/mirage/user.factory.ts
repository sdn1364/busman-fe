import { Factory } from "miragejs";
import { faker } from "@faker-js/faker";

type User = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  password: string;
};

export const personFactory = Factory.extend<Partial<User>>({
  get firstname() {
    return faker.person.firstName();
  },
  get lastname() {
    return faker.person.lastName();
  },
  get email() {
    return faker.internet.email();
  },
  get phone() {
    return faker.phone.number();
  },
});
