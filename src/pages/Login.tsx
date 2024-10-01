import { Navigate, redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"

const Login = () => {
    const {user, setUser} = useAuth();
if(user){
    return <Navigate to={"/"} replace={true} />;
}
  return (
    <div>Login</div>
  )
}

export default Login