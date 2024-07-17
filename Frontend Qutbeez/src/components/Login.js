import React from 'react'

import { NavLink } from 'react-router-dom';
import { FaUser,FaLock } from "react-icons/fa";

function Login() {
  return (
    <>
      <div className="login">
        <form action="" className="login__form">
           <h1 className="login__title">Login</h1>

           <div className="login__inputs">
              <div className="login__box">
                
                 <input type="email" placeholder="Email ID"   name='email' required  className="login__input"/>
                 <FaUser className='icon' />
              </div>

              <div className="login__box">
                  
                 <input type="password" placeholder="Password"  required name='pass' className="login__input"/>
                 <FaLock className='icon' />
              </div>
           </div>

           <div className="login__check">
              <div className="login__check-box">
                 <input type="checkbox" className="login__check-input" id="user-check"/>
                 <label for="user-check" className="login__check-label">Remember me</label>
              </div>

              <NavLink  to="/" className="login__forgot">Forgot Password?</NavLink>
           </div>

           <button type="submit" className="login__button">Login</button>

           <div className="login__register">
              Don't have an account? <NavLink to='/registration'>Register</NavLink>
           </div>
        </form>
     </div> 
      
    </>
  )
}

export default Login;
