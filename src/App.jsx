import React from "react";
import { Route, Routes } from "react-router";
import { AdminRoutes, ExtraRoutes, PublicRoutes, UserRoutes } from "./Router";
import ProtectedLayout from "./layouts/ProtectedLayout";
import PublicLayOut from "./layouts/PublicLayOut";
import "./App.css"

function App() {
  return (
    <Routes>
      {PublicRoutes.map((route, index) => {
        return (
          <Route element={<PublicLayOut />}>
            <Route key={index} path={route.path} element={route.element} />
          </Route>
        );
      })}
      {AdminRoutes.map((route, index) => {
        return (
          <Route element={<PublicLayOut />}>
            <Route
              key={index}
              path={route.path}
              element={
                <ProtectedLayout requiredRole="admin">
                  {route.element}
                </ProtectedLayout>
              }
            />
          </Route>
        );
      })}
      {UserRoutes.map((route, index) => {
        return (
          <Route element={<PublicLayOut />}>
            <Route
              key={index}
              path={route.path}
              element={
                <ProtectedLayout requiredRole="user">
                  {route.element}
                </ProtectedLayout>
              }
            />
          </Route>
        );
      })}
      {ExtraRoutes.map((route, index) => {
        return <Route key={index} path={route.path} element={route.element} />;
      })}
    </Routes>
  );
}

export default App;
