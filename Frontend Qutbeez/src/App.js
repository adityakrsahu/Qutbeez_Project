import { BrowserRouter,Routes,Route } from "react-router-dom";
import CurdLayout from "./CurdLayout";
import Home from "./home";
import About from "./about";
import Contact  from "./contact";
import Login from "./login";
import Registration from "./registration";



const App=()=> {
  return (
    <>

    <BrowserRouter>
    <Routes>
     <Route path="/" element={<CurdLayout/>}> 
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/registration" element={<Registration/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
