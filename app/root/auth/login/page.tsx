import { Suspense } from "react";
import Login from "../../../pages/auth/login";

export default function LoginRoute() {
  return (
    <Suspense fallback={null}>
      <Login />
    </Suspense>
  );
}
