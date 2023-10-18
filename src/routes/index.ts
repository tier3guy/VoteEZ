// Internal Imports
import { lazy } from "react";

// Types
import { RoutesType } from "../types";

// Pages
// Auth Pages
const LoginScreen = lazy(() => import("../pages/Auth/Login"));
const SignupScreen = lazy(() => import("../pages/Auth/Signup"));
const ForgetPasswordScreen = lazy(() => import("../pages/Auth/ForgetPassword"));

// App Pages

export const AUTH_ROUTES: Array<RoutesType> = [
  {
    __id: "1",
    exact: true,
    path: "/auth",
    element: "AuthScreen",
  },
  {
    __id: "2",
    exact: true,
    path: "/auth/login/:user",
    element: LoginScreen,
  },
  {
    __id: "3",
    exact: true,
    path: "/auth/signup/:user",
    element: SignupScreen,
  },
  {
    __id: "4",
    exact: true,
    path: "/auth/forget-password",
    element: ForgetPasswordScreen,
  },
];

export const APP_ROUTES: Array<RoutesType> = [];
