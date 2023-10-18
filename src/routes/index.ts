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
const HomeScreen = lazy(() => import("../pages/Home"));

export const AUTH_ROUTES: Array<RoutesType> = [
  {
    __id: "1",
    exact: true,
    path: "/auth/login/",
    element: LoginScreen,
  },
  {
    __id: "2",
    exact: true,
    path: "/auth/signup/",
    element: SignupScreen,
  },
  {
    __id: "3",
    exact: true,
    path: "/auth/forget-password",
    element: ForgetPasswordScreen,
  },
];

export const APP_ROUTES: Array<RoutesType> = [
  {
    __id: "1",
    exact: true,
    path: "/",
    element: HomeScreen,
  },
];
