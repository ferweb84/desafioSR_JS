import React from "react";
import "./PromosApp.css";
import appstore from "./img/app__store.png";
import googleplay from "./img/google_play.png";
import celular from "./img/landing_page_image-croped-5-1-1.png"

const PromosApp =()=>{
    return(
        
            <div className="row fondo_rojo text-white mt-5 "> 
                <div className="col-md-4 offset-md-2 pt-5 text-center">
                    <img src={celular} alt="Celular" width="480" />
                </div>
                <div className="col-md-4 p-5">
                    <h3>Descargá la APP y disfrutá mucho más por mucho menos </h3>
                    <p><img src={appstore} alt="App Store" width="135"/> <img src={googleplay} alt="GooglePlay" width="135" /></p>
                    <p>Apple y el logotipo de Apple son marcas comerciales de Apple Inc., registradas en EE. UU. Y otros países. App Store es una marca de servicio de Apple Inc. Google Play es una marca comercial de Google Inc. Se aplican términos.</p>
                </div>
                
            </div>
        
    )
}

export default PromosApp;