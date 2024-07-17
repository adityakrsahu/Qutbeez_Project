import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { HiBars3 } from "react-icons/hi2";
import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa6";
import { FaAmazonPay } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa"; 

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <nav id="topmenu">
                <h1><Link to="home" className="brandicon">QUTBEEZ</Link></h1>
                <div id="topmenu1">
                    <ul>
                        <li><Link to="home" className="topmenu" style={{ color: "black" }}>HOME</Link></li>
                        <li><Link to="about" className="topmenu" style={{ color: "black" }}>ABOUT</Link></li>
                        <li><Link to="contact" className="topmenu" style={{ color: "black" }}>CONTACT</Link></li>
                    </ul>
                </div>
                <div id="topmenu2">
                    <ul>
                        
                        <li><Link className="icon" onClick={toggleDropdown}><FaRegUser /></Link>
                        <div className="profile-dropdown">
                                {isOpen && (
                                    <div className="dropdown-menu">
                                        <button onClick={toggleDropdown}>Close</button>
                                        <p>Welcome Qutbeez</p>
                                        <NavLink to='/register'><button className="login-signup-btn">Login / Signup</button></NavLink>
                                    </div>
                                )}
                            </div></li>
                        <li><Link to="cart" className="icon"><FaShoppingCart /></Link></li>
                        <li><Link className="icon" onClick={toggleSidebar}><HiBars3 /></Link></li>
                    </ul>
                </div>
            </nav>

            {isSidebarOpen && (
                <div className="sidebar">
                    <button className="close-btn" onClick={toggleSidebar}><FaTimes /></button>
                    <ul>
                        <li><Link to="category/women" onClick={toggleSidebar}>Women</Link></li>
                        <li><Link to="category/men" onClick={toggleSidebar}>Men</Link></li>
                        <li><Link to="category/kids" onClick={toggleSidebar}>Kids</Link></li>
                    </ul>
                </div>
            )}


            <div id="content">
                <Outlet />
            </div>

            <footer id="footer">
                <div id="foot1">
                    <div>
                        <h3>COMPANY INFO</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Latest Post</li>
                            <li>Contact Us</li>
                            <li>Shop</li>
                        </ul>
                    </div>
                    <div>
                        <h3>HELP LINK</h3>
                        <ul>
                            <li>Tracking</li>
                            <li>Order Status</li>
                            <li>Delivery</li>
                            <li>Shipping Info</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div>
                        <h3>USEFUL LINKS</h3>
                        <ul>
                            <li>Special Offer</li>
                            <li>Gift Cards</li>
                            <li>Advertising</li>
                            <li>Terms of Use</li>
                        </ul>
                    </div>
                    <div>
                        <h3>GET IN THE KNOW</h3>
                        <input type="text" placeholder="Enter Email" style={{ border: "none", marginLeft: "35px" }} />
                        <hr style={{ marginLeft: "40px" }} />
                    </div>
                </div>
                <hr />
                <div id="foot2">
                    <div>
                        <p>Copyright © 2024 Qutbeez eCommerce</p>
                        <p>Designed by Qutbeez</p>
                        <p>Privacy Policy <span style={{ marginLeft: "20px" }}>Terms & Condition</span></p>
                    </div>
                    <div>
                        <ul>
                            <li><RiVisaLine /></li>
                            <li><FaCcMastercard /></li>
                            <li><FaCcPaypal /></li>
                            <li><FaAmazonPay /></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Layout;
