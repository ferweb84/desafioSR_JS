import React from 'react'


const Descripcion = ()=> <p> Es un BuzoFramework de buy&hold </p>

const Header = ({props}) => {
    let estilo = {
        color:'white',
        backgroundColor:'pink',
        paddingTop: '20px',
        paddingBotton: '20px',
    };
  return (
    <div className='row'>
    <div className='col-md-12 bg-black text-white p-3'  style={estilo}>
        <h1>Buy & hold</h1>
        <h2>{props.curso} {props.tipohorario}</h2>
        <Descripcion tipo= {props.tipohorario}/>
        <hr />
        <div> Encabezado</div>
    </div>
    </div>
  )
}

export default Header