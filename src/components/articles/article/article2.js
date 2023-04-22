import React, { useEffect } from 'react';

export function Hijo(props) {
  useEffect(() => {
    const json = { nombre: 'Juan', apellido: 'Perez' };
    props.recibirJsonProp(json);
  }, ); // arreglo de dependencias vacío para que se ejecute solo una vez



  return (
    <div>
 nada
    </div>
  );
}
