import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/home";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import CartView from "./components/CartView";
import CheckoutView from "./components/CheckoutView";
import Register from "./components/Register";
import Login from "./components/Login";
const App=()=> {
  return (
    <>

    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Layout/>}> 
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="about" element={<AboutUs/>}/>
      <Route path="contact" element={<ContactUs/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="cart" element={<CartView/>}>
      <Route path="checkout" element={<CheckoutView/>}/>
      </Route>

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
