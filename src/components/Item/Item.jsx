import React, { Component } from "react";
import './Item.css'

class Item extends Component{
    render(){
        return (
        <li>
        <a href="http">{this.props.valor}</a>
        </li>
    )

    }
    
}

export default Item


// const Item= ({prod})=>{
//     return  (
//         <div className="card">
//         <div className="title">
//             <h2 className="nombreProd">{prod.nombre}</h2>
//         </div>
//         <div>
//             <img src={prod.img} alt={prod.nombre} className='imgProd'/>
//         </div>
//         <div className="containerDescrip">
//             <p className="descripProd">{prod.description}</p>
//             <p className="precioProd">${prod.precio}</p>
            
//             <button className="buttonProd">Ver Descripcion</button>

//     </div>
// </div>
//     )
// }
