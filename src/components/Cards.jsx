import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Cards = (props) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/card/${props.card.id}`);
  };

  return (
    // <Col>
    //     <div className='m-4' onClick={handleCardClick} style={{ cursor: 'pointer' }}>
    //         <Card.Img variant="top" src={props.card.image + "/high.webp"} />
    //     </div>
    // </Col>
    <Col>
    <div className='m-4 holographic-card' onClick={handleCardClick} style={{ cursor: 'pointer' }}>
        <Card.Img variant="top" src={props.card.image + "/high.webp"} />
    </div>
</Col>
  );
}

export default Cards;