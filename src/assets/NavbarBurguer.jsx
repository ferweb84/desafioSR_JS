import React from "react";
import CartWidget from "../components/CartWidget/CartWidget";
import logo from "./img/logoBuy.png";

const NavbarBurguer =()=>{
    return(
        <div className="container"> 
            <ul className="nav d-flex aling-items-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="www."><img src={logo} width="48" alt=""/></a>
        </li>
        <li className="nav-item">
          <a className="nav-link link_header" href="www.">Tienda</a>
        </li>
        <li className="nav-item">
          <a className="nav-link link_header" href="www.">Menu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link link_header" href="www.">Cupones</a>      
        </li>
        <CartWidget/>
      </ul>
      </div>
    )
}

export default NavbarBurguer;