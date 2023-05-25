import Home from "./pages/home/Home";
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import NewUser from "./pages/newUser/NewUser";
import './styles/darkStyle.scss'
import { useContext } from "react";
import { DarkModeContext } from "./components/context/darkModeContext";

const App=()=>{
  const{darkMode} =useContext(DarkModeContext)
  return (
    <div className={darkMode ? 'app dark':'app'}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
          </Route>
          <Route path="users">
            <Route index element={<List/>}/>
            <Route path=":userId" element={<Single/>}/>
            <Route path='newUser' element={<NewUser/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
