import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: any }) => {
  const { setUser } = useAuth();
  const token = localStorage.getItem("authToken");
  if (!token) {
    return <Navigate to={"/login"} replace={true} />;
  }
  useEffect(()=>{
    setUser({name:"sathvik", id:"EMP001"})
  },[])
  return <>{children}</>;
};

export default ProtectedRoute;
