import { useEffect, useState } from 'react';
import { Endpoints } from "../_services/endpoints.services";
import Card from "../components/Cards";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

const Home = () => {
  const [cards, setCards] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 39;

  useEffect(() => {
    const storedCards = localStorage.getItem('cards');
    if (storedCards) {
      console.log("Using cached data from local storage");
      setCards(JSON.parse(storedCards));
      setLoaded(true);
    } else {
      console.log("Fetching data from API");
      Endpoints.getAllCards()
        .then((response) => {
          console.log(response.data);
          setCards(response.data);
          localStorage.setItem('cards', JSON.stringify(response.data));
          setLoaded(true);
        })
        .catch((error) => {
          console.error(error);
          setError(error);
        });
    }
  }, []);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
      <>
        <Container>
          <Row lg={4} md={3} sm={2} xs={1}>
            {currentCards.filter(card => card.image).map((card, index) => {
              return <Card card={card} key={index} />
            })}
          </Row>
          <div className="d-flex justify-content-center m-4">
            <Button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="me-2"
            >
              Précédent
            </Button>
            <Button
              onClick={() => paginate(currentPage + 1)}
              disabled={indexOfLastCard >= cards.length}
            >
              Suivant
            </Button>
          </div>
        </Container>
      </>
    )
  }
}

export default Home;