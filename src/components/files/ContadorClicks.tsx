import React from 'react';
import './style.css';


export default function contadorClicks() {
  const [clicks, setClicks] = React.useState(0);
  const [fecha, setFecha] = React.useState(new Date());
  return (
    <div
      onClick={() => {
        setClicks(clicks + 1);
        setFecha(new Date());
        console.log('Hiciste click: ' + clicks + 'veces!!!');
      }}
    >
      <h1>Contador de Clicks</h1>
      <p>
        Clicks: {clicks} - Fecha:{fecha.getDate()}/{fecha.getMonth() + 1}/
        {fecha.getFullYear()} {fecha.getHours()}:{fecha.getMinutes()}:
        {fecha.getSeconds()}
      </p>
    </div>
  );
}