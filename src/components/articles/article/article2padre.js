// Componente padre
import React, { useState } from "react";
import { Hijo } from "./article2";

export function Padre() {
  const recibirJson = (json) => {
    console.log(JSON.stringify(json));
  };

  return (
    <div>
      <Hijo recibirJsonProp={recibirJson} />
    </div>
  );
}
