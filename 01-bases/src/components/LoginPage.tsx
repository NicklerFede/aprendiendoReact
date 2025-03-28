import { useAuthContext } from "../context/AuthContext"

export const LoginPage = () => {

 const { status } = useAuthContext();

const { isChecking } = useAuthContext(); 

if ( isChecking) {
  return <h1>Verificando usuario</h1>
}

  return (
    <>
   <h3>Login</h3>

   <span></span>
   </>
  )
}

