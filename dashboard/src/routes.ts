import { ComponentType, lazy } from "react";
const RegistrationPage = lazy(() => import("./pages/auth/registration"));
const LoginPage = lazy(() => import("./pages/auth/login"));
const SendPasswordResetEmailPage = lazy(
  () => import("./pages/auth/forget-password")
);
const ResetPasswordPage = lazy(() => import("./pages/auth/reset-password"));

interface IRoute {
  path: string;
  component: ComponentType | null;
}

const routes: IRoute[] = [
  {
    path: "/auth/registration",
    component: RegistrationPage,
  },
  {
    path: "/auth/login",
    component: LoginPage,
  },
  {
    path: "/auth/forget-password",
    component: SendPasswordResetEmailPage,
  },
  {
    path: "/auth/reset-password",
    component: ResetPasswordPage,
  },
];

export { routes };
