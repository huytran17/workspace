import { ComponentType } from "react";
import BaseRegistrationForm from "./components/auth/BaseRegistrationForm";

interface IRoute {
  path: string;
  component: ComponentType | null;
}

const routes: IRoute[] = [
  {
    path: "/auth/registration",
    component: BaseRegistrationForm,
  },
];

export { routes };
