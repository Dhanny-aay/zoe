import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Desk from "./deskApp/desk";
import Login from "./deskApp/login";
import Home from "./deskApp/home";

function App() {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
   <>
   <Routes>
    <Route path="/" element={<Desk/>}/>
    <Route path="/signin" element={<Login/>}/>
    <Route path="/Home" element={<Home/>}/>
   </Routes>
   </>
  );
}

export default App;
