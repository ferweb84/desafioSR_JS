import React, {useEffect, useState} from 'react'
import { getFetch } from '../../Mock'
import ItemList from '../ItemList/ItemList'




const ItemListContainers=({greeting})=>{

  const[stockProductos, setStockProductos]= useState([])
  const[loading, setLoading]= useState(true)

  useEffect(()=>(
    getFetch
    .them((respuesta)=> setStockProductos (respuesta))
    .catch(err => console.log(err))
    .finally(()=>setLoading(false))
  ), [] )

  return(
    <div className='greeting'>{greeting}
    <div>
        {
          loading
          >
          <h1 className='cargando'>CARGANDO....</h1>
          
          }
          <div>
              <h1 className='titulo'>CATALOGO DE PROODUCTOS</h1>
              <div className='lista'>
              <ItemList Prod= {stockProductos}/>
              </div>
          </div>
        
    </div>
    </div>
  )
  }


export default ItemListContainers