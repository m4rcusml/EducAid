import { createContext, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";

type UserTypes = 'visitante' | 'normal' | 'fromGoogle' | null;

type UserType = {
    userType: UserTypes;
    email: string;
    password: string;
    school: string;
  }

type AuthContextData = {
  isLogged: boolean;
  user?: UserType;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const UsersSchema: UserType[] = [];

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [ user, setUser ] = useState<UserType>();
  
  function register({ email, password, school }: { email: string, password: string, school: string }) {
    setUser({
      userType: 'normal',
      email,
      password,
      school
    });
  }

  function registerWithGoogle() {
    setUser({
      userType: 'fromGoogle',
      email: 'email.aleatorio@gmail.com',
      password: '12345678',
      school: 'Fundação Bradesco'
    });
    Alert.alert('Sucesso', 'Você criou uma conta com o google');
  }
  
  function login({ email, password }: { email: string, password: string }) {
    UsersSchema.forEach((user, index) => {
      if(user.email === email) {
        if(user.password === password) {

        } else {
          throw new Error('Email e/ou senha estão incorretos');
        }
      } else {
        if(UsersSchema.length -1 === index) {
          throw new Error('Esta conta não existe');
        }
      }
    });
  }

  function loginWithGoogle() {
    
  }

  useEffect(() => {
    setTimeout(() => {
    }, 1500);
  }, []);
  
  return (
    <AuthContext.Provider
      value={{
        isLogged: !!user,
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context
}

export { AuthProvider, useAuth };