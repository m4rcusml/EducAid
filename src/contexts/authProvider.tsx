import { createContext, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";

type UserTypes = 'visitante' | 'normal' | 'fromGoogle' | null;

type UserDataType = {
  userType: UserTypes;
  username?: string;
  picture?: string;
  school?: string;
  email?: string;
  password?: string;
  exp?: number;
};

type ResponseType = { type: 'error' | 'sucess', message: string };
  
type AuthContextData = {
  isLogged: boolean;
  user?: UserDataType;
  register({ email, password, school }: { email: string, password: string, school: string }): ResponseType;
  registerWithGoogle(): ResponseType;
  logAsVisitant(): void;
  login({ email, password }: { email: string, password: string }): ResponseType;
  loginWithGoogle(): ResponseType;
  logOut(): void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const UsersSchema: UserDataType[] = [];

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [ user, setUser ] = useState<UserDataType>();
  
  function logAsVisitant() {
    setUser({userType: 'visitante', username: 'visitante'});
  }
  
  function register({ email, password, school }: { email: string, password: string, school: string }): ResponseType {
    const user: UserDataType = {
      userType: 'normal',
      email,
      password,
      school,
      exp: 0
    };

    UsersSchema.push(user);

    return { type: 'sucess', message: 'Conta criada com sucesso' };
  }

  function registerWithGoogle(): ResponseType {
    const user: UserDataType = {
      userType: 'fromGoogle',
      email: 'email.aleatorio@gmail.com',
      password: '12345678',
      school: 'Fundação Bradesco',
      exp: 0
    };

    UsersSchema.push(user);

    return { type: 'sucess', message: 'Conta criada com sucesso' };
  }
  
  function login({ email, password }: { email: string, password: string }): ResponseType {
    for(let i = 0; i < UsersSchema.length; i++) {
      if(UsersSchema[i].email === email) {
        if(UsersSchema[i].password === password) {
          if(UsersSchema[i].userType === 'normal') {
            setUser(UsersSchema[i]);
            return { type: 'sucess', message: 'Login realizado com sucesso' };
          }
        } else {
          return { type: 'error', message: 'Email e/ou senha estão incorretos' };
        }
      }
    }

    return { type: 'error', message: 'Esta conta não existe' };
  }

  function loginWithGoogle(): ResponseType {
    for(let i = 0; i < UsersSchema.length; i++) {
      if(UsersSchema[i].email === 'email.aleatorio@gmail.com') {
        if(UsersSchema[i].password === '12345678') {
          if(UsersSchema[i].userType === 'normal') {
            setUser(UsersSchema[i]);
            return { type: 'sucess', message: 'Login realizado com sucesso' };
          }
        } else {
          return { type: 'error', message: 'Email e/ou senha estão incorretos' };
        }
      }
    }

    return { type: 'error', message: 'Esta conta não existe' };
  }

  function logOut() {
    setUser(undefined);
  }

  return (
    <AuthContext.Provider
      value={{
        isLogged: !!user,
        user,
        register,
        registerWithGoogle,
        login,
        logAsVisitant,
        loginWithGoogle,
        logOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };