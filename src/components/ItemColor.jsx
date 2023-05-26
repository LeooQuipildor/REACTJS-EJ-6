import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';

const ItemColor = ({color, borrarColor}) => {
    return (
        <Col md={6} lg={4} className='mb-5'>
            <h2>Nombre Color</h2>
            <div className='p-5 mx-5' style={{backgroundColor: `${color}`}}>
                {color}
            </div>
            <br />
            <Button variant='danger' onClick={()=> borrarColor(color)}>Borrar</Button>
        </Col>
    );
};

export default ItemColor;