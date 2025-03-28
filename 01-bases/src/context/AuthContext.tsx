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
}

interface User {
name: string;
email: string;
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {

const [status, setStatus] = useState(AuthStatus.checking)


  useEffect(() => {
   setTimeout(()=> {
    setStatus( AuthStatus.unauthenticated);
   }, 1500)
  }, [])
  


  return (
    <>
      <AuthContext.Provider
        value={{
          status: status,

          isChecking: status === AuthStatus.checking,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};
