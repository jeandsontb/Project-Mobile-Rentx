import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../hooks/auth';

import { AppTabRoutes } from './appTab.routes';
import { AuthRoutes } from './auth.routes';

const Routes = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.id ? <AppTabRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}

export { Routes };
