import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { isLoggedIn } from "../../../Backend/auth";

const User = () => {
  return isLoggedIn() ? <Outlet /> : <Navigate to={"/login"} />;
};

export default User;
