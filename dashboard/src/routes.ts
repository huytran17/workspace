import { ComponentType, lazy } from "react";
const BaseRegistrationForm = lazy(
  () => import("./components/auth/registration/BaseRegistrationForm")
);
const BaseLoginForm = lazy(
  () => import("./components/auth/login/BaseLoginForm")
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
  {
    path: "auth/login",
    component: BaseLoginForm,
  },
];

export { routes };
