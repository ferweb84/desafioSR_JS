import { Component } from "react";
import twitter from "./img/SM-RRSS-01.png";
import youtube from "./img/SM-RRSS-02.png";
import instagram from "./img/SM-RRSS-03.png";
import facebook from "./img/SM-RRSS-04.png";

//BASADO EN CLASSES
class Footer extends Component{
    render(){
        return(
            <dir className="row fondo_marron p-5">
        <div className="col">
        <div className="container text-white ">
            <hr />
            <div className="row">
                <div className="col-md-6">
                    <p>TM © 2021 Burger King Corporation. Todos los derechos reservados.</p>
                </div>
                <div className="col-md-6 text-end">
                    <img src={facebook} width="24" alt="facebook" />
                    <img src={instagram} width="24" alt="instagram" />
                    <img src={youtube} width="24" alt="youtube" />
                    <img src={twitter} width="24" alt="twitter" />
                </div>
                <p>{this.props.ubicacion} - {this.props.anio} </p>
                <p>{this.props.lista.nombre}</p>
                <p><strong>CoderHouse </strong> 2022</p>
            </div>
        </div>
        </div>
    </dir>
        )
    }
    
}

// const Footer =()=>{
//     return(
//     <dir className="row fondo_marron p-5">
//         <div className="col">
//         <div className="container text-white ">
//             <hr />
//             <div className="row">
//                 <div className="col-md-6">
//                     <p>TM © 2021 Burger King Corporation. Todos los derechos reservados.</p>
//                 </div>
//                 <div className="col-md-6 text-end">
//                     <img src={facebook} width="24" alt="facebook" />
//                     <img src={instagram} width="24" alt="instagram" />
//                     <img src={youtube} width="24" alt="youtube" />
//                     <img src={twitter} width="24" alt="twitter" />
//                 </div>
//             </div>
//         </div>
//         </div>
//     </dir>
//     )
// }

export default Footer;