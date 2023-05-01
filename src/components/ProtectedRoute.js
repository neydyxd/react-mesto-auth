import React from "react";
import { Route, Link } from "react-router-dom";

export default function ProtectedRoute({ element: Component, ...props }) {
  return (
    <Route>
      {() =>
        props.isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Link to="sign-in" />
        )
      }
    </Route>
  );
}