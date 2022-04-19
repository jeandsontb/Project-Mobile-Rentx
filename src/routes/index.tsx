import React from "react";
import { ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../hooks/auth";

import { AppTabRoutes } from "./appTab.routes";
import { AuthRoutes } from "./auth.routes";

const Routes = () => {
  const { user, loading } = useAuth();

  return loading ? (
    <ActivityIndicator size="large" />
  ) : (
    <NavigationContainer>
      {user.id ? <AppTabRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export { Routes };
