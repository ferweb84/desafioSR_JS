import './estilos.css';
import 'core-js/actual';
import NavBar from './components/NavBar/NavBar';
import Header from './assets/Header';
import Footer from './assets/Footer';
import React from 'react';
import ContadorBoton from './components/ContadorBoton/ContadorBoton';
import Destacados from './assets/Destacados';
import Cupones from './assets/Cupones';
import PromosApp from './assets/PromosApp';
import Lista from './components/Lista/Lista';
import Boton  from './components/Boton/Boton';
import ItemListContainers from './components/ItemListContainers/ItemListContainers';
import NadvarBurguer from './assets/NavbarBurguer'
import Item from './components/Item/Item';
import Titulo from './components/Titulo/Titulo';
import Input from './components/Input/Input';
import CartWidget from './components/CartWidget/CartWidget';


 

const stockProductos =[
  {id: 1, nombre: "Buzo Algodon", tipo: "Estampado Gris", cantidad: 10,desc: "Estampado", precio: 1200, talle: "Large", img: "./img/buzoB.jpg"},
    {id: 2, nombre: "Buzo Algodon", tipo: "Estampado", cantidad: 12, desc: "Estampado", precio: 1100, talle: "Large", img: './img/buzoB2.jpg'},
    {id: 3, nombre: "Buzo Algodon", tipo: "buzo", cantidad: 15, desc: "Estampado", precio: 1200, talle: "Medium", img: './img/buzoB3.jpg'},
    {id: 4, nombre: "Buzo Algodon", tipo: "buzo", cantidad: 14, desc: "Estampado", precio: 1400, talle: "Medium", img: './img/buzoB2.jpg'},
    
]

let titulo ="stockProductos";

const onAdd= (quantity)=>{
  console.log(`Compraste ${quantity} unidades`);
}


function App() {
  const lista=["Desarrollo Buzos Web", "javaRemeras", "CamperasReactJs"];
  const items = lista.map (items =>(
  <Item valor={items}/>
  ));

  const Burguers = ["BigRemeron","DobleBuzoDelibra", "CamperaTasty"];
  const objetos ={};

  return (
    <div className='container-fluid fondo_amarillo'>


      <Header curso="Curso de Estampado..." tipohorario="horas 21"/> 
      
      <h3>{titulo}</h3>
      <ul>
        {
          stockProductos.map(item => (
            <li key={item.id}>{item.nombre} - $ {item.precio}</li>
          ))
        }
      </ul>


      <Titulo valor= "Crusos Bordado"/>
      <ul>{items}</ul>

      <Titulo valor="Formulario de Contacto"/>
      <form/>
        <div className='mb-3'> 
            <label className='form-label'>Nombre</label>
            <Input valor="Nombre"/>
        </div>
        <div className='mb-3'>
            <label className='form-label'>Email</label>
            <Input valor= "Email"/>
        </div>
            <button type='button' className='btn btn-primary'>Enviar</button>
      <form/>
      

      <NavBar/>
      <CartWidget/>

      <NadvarBurguer/>

      <hr />

      <ContadorBoton initial={1} stock={10} onAdd= {onAdd}/>

      <ItemListContainers greeting = 'Bienvenidos a BurguerKingdom' />

      <Lista items ={Burguers} titulo={"Mi Lista"} objetos= {objetos}/>

      <Boton/>

      <Destacados/>

      <Cupones/>

      <PromosApp/>

      <Footer ubicacion="Buy&Hold" anioCreacion="2022" lista={{id:1, nombre:"Buzo Algodon"}}/>
      
    </div>
  );
      }


export default App;


