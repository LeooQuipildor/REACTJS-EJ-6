import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import Formulario from './components/Formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Container className='mainPage'>
      <section className='cardLista row'>
        <h1 className='display-5 text-center text-light pt-5'>Administrar colores</h1>
        <hr/>
        <Formulario></Formulario>
      </section>
    </Container>
    <footer className='bg-dark text-light text-center py-4'>
      <p>&copy;Todos los derechos reservados</p>
    </footer>
      
    </>
  )
}

export default App
