import { Suspense } from "react";
import ResetPassword from "../../../pages/auth/reset-password";

export default function ResetPasswordRoute() {
  return (
    <Suspense fallback={null}>
      <ResetPassword />
    </Suspense>
  );
}
