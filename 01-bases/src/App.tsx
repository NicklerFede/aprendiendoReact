/* import BasicTypes from './typescript/BasicTypes' */
/*import ObjectLiterals from './typescript/ObjectLiterals'*/
/* import { BasicFunctions } from './typescript/BasicFunctions' */
/* import { Counter } from "./components/Counter"; */
/* import { LoginPage } from "./components/LoginPage"; */
/* import { UserPage } from "./components/UserPage"; */

import { AuthProvider } from "./context/AuthContext";


import "./App.css";
import { FormsPage } from "./components/FormsPage";



function App() {
  return (
      <AuthProvider>
      <div className="flex flex-col justify-center items-center h-svh">
        <h1 className="text-4xl mb-5">React + TS</h1>

      {/* <BasicTypes /> */}
      {/*<ObjectLiterals/> */}
      {/* <BasicFunctions/> */}
      { /* <Counter/> */ }
      { /* <LoginPage /> */}
      { /* <UserPage/> */ }
      <FormsPage />
      </div>

      </AuthProvider>
   

  );
}

export default App;
