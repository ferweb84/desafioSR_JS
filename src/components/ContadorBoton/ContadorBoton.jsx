import React,{useState, useEffect} from 'react';
import './contadorBoton.css';


export const ContadorBoton = ({initial,stock,onAdd}) => {
  const [contador, setContador]=useState(parseInt(initial));

    const disminuir=()=>{
        setContador(contador -1);
  }
    const aumentar =()=>{
        setContador(contador +1);  
  }
    useEffect(()=>{
        setContador(parseInt(initial));
    },[initial])

  return (
    <div className='Contador'>
        <button disabled={contador <= 1} onClick={disminuir}>-</button>
        <span>{contador}</span>
        <button disabled={contador >= stock} onClick={aumentar}>+</button>
        <div>
            <button disabled={stock<=0} onClick={()=> onAdd(contador)}>Boton Contador --- agregar carrito</button>
        </div>
        </div>
  );
  }

export default ContadorBoton;

