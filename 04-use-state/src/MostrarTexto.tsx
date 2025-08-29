import {useState} from "react";

function MostrarTexto() {
  const [mostrar, setMostrar] = useState(false)

  function handleMostrar() {
    setMostrar(!mostrar)
  }

  return (
    <>
      <button onClick={handleMostrar}>
        {mostrar ? 'Ocultar' : 'Mostrar'}
      </button>
      {mostrar && <p>lorem ipsum</p>}
    </>
  )
}

export default MostrarTexto