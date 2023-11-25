import { ComponentType, lazy } from "react";
const BaseRegistrationForm = lazy(
  () => import("./components/auth/registration/BaseRegistrationForm")
);

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
