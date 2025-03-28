import { createContext, useContext, PropsWithChildren, useEffect, useState } from "react";


enum AuthStatus {
  "checking" = 'checking',
  "authenticate" = 'authenticate',
   "unauthenticated" = 'unauthenticated'
}

interface AuthState {
  status: AuthStatus;
  token?: string;

  user?: User;
  isChecking: boolean;
  isAuthenticated: boolean;

  //Methods
  loginWithEmailPassword: (email: string, password: string) => void;
  logOut: () => void;
}

interface User {
name: string;
email: string;
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {

const [status, setStatus] = useState(AuthStatus.checking);

const [user, setUser] = useState<User>()


  useEffect(() => {
   setTimeout(()=> {
    setStatus( AuthStatus.unauthenticated);
   }, 1500)
  }, [])

  const loginWithEmailPassword = (email: string, password: string) => {

    setUser({
      name: 'Federico Nickler',
      email: email,
    });
    setStatus(AuthStatus.authenticate)
  
  }

  const logOut = () => {
    setUser(undefined)
    setStatus(AuthStatus.unauthenticated)  
  }

  return (
    <>
      <AuthContext.Provider
        value={{
          status: status,
          user: user,

          isChecking: status === AuthStatus.checking,
          isAuthenticated: status === AuthStatus.authenticate,

          //Method
          loginWithEmailPassword, 
          logOut
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};
