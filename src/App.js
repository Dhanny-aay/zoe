import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Desk from "./deskApp/desk";
import Login from "./deskApp/login";
import Home from "./deskApp/home";
import Settings from "./deskApp/setting";
import SelectedApp from "./deskApp/selectedApp";
import Microphone from "./deskApp/microphone";
import Notification from "./deskApp/noti";
import Help from "./deskApp/help";
import CommandList from "./deskApp/cmdList";

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
    <Route path="/setting" element={<Settings/>}/>
    <Route path="/help" element={<Help/>}/>
    <Route path="/cmdlist" element={<CommandList/>}/>
    <Route path="/setting/selectedApps" element={<SelectedApp/>}/>
    <Route path="/setting/micrphone" element={<Microphone/>}/>
    <Route path="/setting/noti" element={<Notification/>}/>
   </Routes>
   </>
  );
}

export default App;
