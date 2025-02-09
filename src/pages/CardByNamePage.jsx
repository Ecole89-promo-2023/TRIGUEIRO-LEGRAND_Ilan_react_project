import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Endpoints } from "../_services/endpoints.services";
import Card from "../components/Cards";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

const CardByNamePage = () => {
  const [cards, setCards] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name');
  const [langue, setLangue] = useState(localStorage.getItem('langue') || 'fr');

  useEffect(() => {
    if (name) {
      Endpoints.getCardByName(langue, name)
        .then((response) => {
          setCards(response.data);
          setLoaded(true);
        })
        .catch((error) => {
          console.error(error);
          setError(error);
        });
    }
  }, [name, langue]);

  if (!loaded) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  } else if (error) {
    return <div>Error: {error.message}</div>
  } else {
    return (
      <Container>
        <Row lg={4} md={3} sm={2} xs={1}>
          {cards.filter(card => card.image).map((card, index) => {
            return <Card card={card} key={index} />
          })}
        </Row>
      </Container>
    )
  }
}

export default CardByNamePage;