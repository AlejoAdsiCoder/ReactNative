import React from 'react'
import { ContadorConHook } from './components/ContadorConHook'
// import { Contador } from './components/Contador'
// import { TiposBasicos } from './typescript/TiposBasicos'
// import { ObjetosLiterales } from './typescript/ObjetosLiterales';
// import { Funciones } from './typescript/Funciones';

export const App = () => {
  return (
    <div className="mt-2">
      <h1>Introduccion a TS - REACT</h1>
      {/* <TiposBasicos />
      <ObjetosLiterales /> */}
      {/* <Funciones /> */}
      {/* <Contador /> */}
      <ContadorConHook />
    </div>
  )
}

export default App;