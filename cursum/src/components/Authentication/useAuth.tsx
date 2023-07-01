import { ReactElement, useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "./AuthProvider";

export function useGuard(
  element: ReactElement,
  path: string = "/cursum/login"
) {
  const { user } = useContext(AuthContext);
  // console.log(user);
  if (!user) {
    // console.log(`Navigating to ${path}...`);
    return <Navigate replace to={path} />;
  } else {
    return element;
  }
}

export function usePermit(element: ReactElement, path: string = "/cursum/") {
  const { user } = useContext(AuthContext);
  // console.log(user);
  if (user) {
    // console.log(`Navigating to ${path}...`);
    return <Navigate replace to={path} />;
  } else {
    return element;
  }
}
