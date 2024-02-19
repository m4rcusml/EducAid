import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

export default function Routes() {
  return false ? <AppRoutes /> : <AuthRoutes />
}