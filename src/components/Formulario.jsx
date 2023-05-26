import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListaColor from './ListaColor';
import { useState, useEffect } from 'react';

const Formulario = () => {
  const [color, setColor] = useState("");
  let coloresLocalStorage = JSON.parse(localStorage.getItem("listaColores")) || [];
  const [listadoColores, setListadoColores] = useState(coloresLocalStorage);


  useEffect(()=>{
    localStorage.setItem("listaColores",JSON.stringify(listadoColores))
  },[listadoColores])


  //Aqui creo mis funciones
  const handleSubmit = (e)=>{
    e.preventDefault();
    setListadoColores([...listadoColores, color])
    setColor("");
  }

  const borrarColor = (nombreColor)=>{
    let arregloFiltrado=listadoColores.filter((itemColor)=>itemColor !== nombreColor);
    setListadoColores(arregloFiltrado)
  }

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex mx-5 row" controlId="color">
          <div className=' colorCard col-lg-4' style={{backgroundColor: `${color}` ,padding: '90px'}}>
            <div className='text-center'>
              {color}
            </div>
          </div>
          <div className='col-lg-8 mt-4'>
            <Form.Control type="text" placeholder="Ingrese un color en ingles" onChange={(e)=>setColor(e.target.value)} value={color}/>
            <p className='text-center'>ej: red, blue, yellow, violet, brown, etc</p>
          </div>
          <hr className='mt-4' />
          <Button variant="primary" type="submit">Guardar</Button>
        </Form.Group>
      </Form>
      <ListaColor listadoColores={listadoColores} borrarColor={borrarColor}></ListaColor>
    </section>
  );
};

export default Formulario;
