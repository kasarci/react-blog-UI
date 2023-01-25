import React, { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import AuthContext from "../shared/Authcontext";

type PrivateRouteProps = {
  component: React.ComponentType;
  path?: string;
  //I can also add roles but it is not necessary for this project.
  //roles={[ROLE.ADMIN]} 
}

  const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: RouteComponent, path }) => {
  const { isLoggedIn } = useContext(AuthContext);
  console.log("is logged in: ", isLoggedIn)
 
  if(isLoggedIn) {
    return <RouteComponent />;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;