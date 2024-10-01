import { Navigate, redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"
import { Container, Typography } from "@mui/material";

const Login = () => {
    const {user, setUser} = useAuth();
if(user){
    return <Navigate to={"/"} replace={true} />;
}
  return (
    <Container>
      <Typography>
          Login
      </Typography>
    </Container>
  )
}

export default Login