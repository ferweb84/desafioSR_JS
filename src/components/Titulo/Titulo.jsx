import React, { Component } from "react";
import './Titulo.css'

class Titulo extends Component{
    render(){
        return (
        <h1>{this.props.valor}</h1>
    )

    }
    
}

export default Titulo
