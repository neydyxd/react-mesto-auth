import React from "react";
import {useNavigate } from "react-router-dom";

export default function ProtectedRoute({ element: Component, ...props }) {
  
  const navigate = useNavigate();
  return props.isLoggedIn ? (
    <Component {...props} />
  ) : (
    navigate('/sign-in', {replace:true})
  );
};