import { useAuth } from "@contexts/authProvider";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

export default function Routes() {
  const { isLogged } = useAuth();
  
  return isLogged ? <AppRoutes /> : <AuthRoutes />
}