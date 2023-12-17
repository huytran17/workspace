import { ComponentType, lazy } from "react";
const RegistrationPage = lazy(() => import("../../pages/auth/registration"));
const LoginPage = lazy(() => import("../../pages/auth/login"));
const ForgetPasswordPage = lazy(
  () => import("../../pages/auth/forget-password")
);
const ResetPasswordPage = lazy(() => import("../../pages/auth/reset-password"));
const SentPasswordResetEmailPage = lazy(
  () => import("../../pages/auth/reset-password/sent-password-reset")
);

interface IRoute {
  path: string;
  component: ComponentType | null;
}

const authRouter: IRoute[] = [
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
    component: ForgetPasswordPage,
  },
  {
    path: "/auth/reset-password",
    component: ResetPasswordPage,
  },
  {
    path: "/auth/reset-password/sent-password-reset",
    component: SentPasswordResetEmailPage,
  },
];

export default authRouter;
