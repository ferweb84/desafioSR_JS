import React from 'react'

const Lista =(props) => {
    const{items, titulo
    }=props;

  return (
    <div>
        {items.map((elemento)=>{
            return <li>{elemento}</li>
        })
        }
        {titulo}
    </div>
  )
}

export default Lista;