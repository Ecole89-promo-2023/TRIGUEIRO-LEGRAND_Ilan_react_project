import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Cards = (props) => {
  return (
    <Col>
        <div className='m-4'>
            <Card.Img variant="top" src={props.card.image + "/high.webp"} />
        </div>
    </Col>
  );
}

export default Cards;