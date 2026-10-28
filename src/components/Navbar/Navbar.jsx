import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import underline from "../../assets/nav_underline.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
// import AnchorLink from "react-anchor-link-smooth-scroll";
// console.log("AnchorLink:", AnchorLink);
// console.log("Type:", typeof AnchorLink);

import AnchorLinkModule from "react-anchor-link-smooth-scroll";
const AnchorLink = AnchorLinkModule.default;

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const menuRef = useRef();

  // const openMenu = () => {
  //   menuRef.current.style.right = "0";
  // };

  // const closeMenu = () => {
  //   menuRef.current.style.right = "-350px";
  // };

  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <img src={menu_open} onClick={()=>setIsMenuOpen(true)} alt="Open menu" className="nav-mob-open" />
      <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
        <img
          src={menu_close}
          onClick={() => setIsMenuOpen(false)}
          alt="Close menu"
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => {setMenu("home"); setIsMenuOpen(false)}}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => {setMenu("about"); setIsMenuOpen(false)}}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => {setMenu("services"); setIsMenuOpen(false)}}>Services</p>
          </AnchorLink>
          {menu === "services" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => {setMenu("work"); setIsMenuOpen(false)}}>Portfolio</p>
          </AnchorLink>
          {menu === "work" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => {setMenu("contact"); setIsMenuOpen(false)}}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};
export default Navbar;
