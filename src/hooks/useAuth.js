import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const useAuth = () => {
  const auth = useContext(AuthContext);
  const isClient = typeof window !== "undefined";
  if (!isClient && !auth) return {};
  if (!auth) {
    throw new Error(
      "Must wrap the Application with AuthProvider to use the useAuth"
    );
  }
  return auth;
};

export default useAuth;
