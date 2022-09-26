import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
// import styled from 'styled-components'
import './NavBar.css'

// const Nav = styled.ul `
//     width: 100%;
//     height: auto;
//     display: flex;
//     justify-content: space-around;
//     align-items: center; 
//     background-color :black ;
// ` 
// const Items = styled.li `
//     text-decoration: none;
//     list-style: none;
//     color: whitesmoke;
//     font-size: 1.5rem;
// `

export const NavBar = () => {
  return (
    <ul>
      <li>Home</li>
      <li>Clientes</li>
      <li>Servicios</li>
      <CartWidget/>      
    </ul>

  )
}
export default NavBar