import React from "react";
import img from "./img/HomeBanner_STACKERXL-27.jpg"

const Destacados =()=>{
    return(
        <div className="text-center">
            <img src={img} alt="Promocion Destacada" className="img-fluid" />
        </div>
    )
}

export default Destacados;