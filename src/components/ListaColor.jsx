import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ItemColor from './ItemColor';

const ListaColor = ({listadoColores, borrarColor}) => {
    return (
    <Row className='text-center'>
        {
            listadoColores.map((color, indice)=> <ItemColor key={indice} color={color} borrarColor={borrarColor}></ItemColor>)
        }
        
    </Row>
    );
};

export default ListaColor;