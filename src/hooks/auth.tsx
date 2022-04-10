import { createContext, useState, useContext, ReactNode, useEffect } from 'react'

import { api } from '../services/api';

import { database } from '../database';
import { User as ModelUser } from '../database/models/User';

interface User {
  id: string;
  user_id: string;
  email: string;
  name: string;
  driver_license: string;
  avatar: string;
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn: ({email, password}:SignInCredentials) => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState<User>({} as User);

  const signIn = async ({email, password}:SignInCredentials) => {
    try {
      const { data } = await api.post('/sessions', {
        email,
        password
      });
  
      const { user, token } = data;  
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      const userCollection = database.get<ModelUser>('users');
      await database.write(async () => {
        await userCollection.create((newUser) => {
          newUser.user_id = user.id,
          newUser.name = user.name,
          newUser.email = user.email,
          newUser.driver_license = user.driver_license,
          newUser.avatar = user.avatar,
          newUser.token = data.token
        })
      })
  
      setData({ ...user, token})
    } catch(error) {
      throw new Error(error as string);
    }
  }

  useEffect(() => {
    const loadUserData = async () => {
      const userCollection = database.get<ModelUser>('users');
      const response = await userCollection.query().fetch();

      console.log(response)
    }

    loadUserData();
  }, []);

  return (
    <AuthContext.Provider 
      value={{
        user: data,
        signIn
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
