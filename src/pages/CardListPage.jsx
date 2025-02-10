import { useEffect, useState } from 'react';
import { Endpoints } from "../_services/endpoints.services";
import { useLocation, useNavigate } from 'react-router-dom';
import Card from "../components/Cards";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Pagination from 'react-bootstrap/Pagination';

const CardListPage = () => {
  const [langue, setLangue] = useState(null);
  const [cards, setCards] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 39;
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  useEffect(() => {
    const storedLangue = searchParams.get('langue');
    if (storedLangue) {
      setLangue(storedLangue);
    } else {
      setLangue(localStorage.getItem('langue') || 'fr');
    }
  }, [location.search]);

  useEffect(() => {
    if (langue) {
      const storedLangue = localStorage.getItem('langue');
      const storedCards = localStorage.getItem(`cards_${langue}`);
      const isLoaded = localStorage.getItem('loaded') === 'true';

      if (storedLangue === langue && storedCards && isLoaded) {
        console.log("Using cached data from local storage");
        setCards(JSON.parse(storedCards));
        setLoaded(true);
      } else {
        console.log("Fetching data from API");
        Endpoints.getAllCards(langue)
          .then((response) => {
            console.log(response.data);
            setCards(response.data);
            localStorage.setItem(`cards_${langue}`, JSON.stringify(response.data));
            localStorage.setItem('langue', langue);
            localStorage.setItem('loaded', 'true');
            setLoaded(true);
          })
          .catch((error) => {
            console.error(error);
            setError(error);
          });
      }
    }
  }, [langue]);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderPaginationItems = () => {
    const items = [];
    const startPage = Math.floor((currentPage - 1) / 5) * 5 + 1;
    const endPage = Math.min(startPage + 4, totalPages);

    for (let number = startPage; number <= endPage; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => paginate(number)}
        >
          {number}
        </Pagination.Item>
      );
    }

    return items;
  };

  if (!langue || !loaded) {
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
          <Pagination className="justify-content-center mt-4">
            <Pagination.First onClick={() => paginate(1)} disabled={currentPage === 1} />
            <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
            {renderPaginationItems()}
            <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} />
            <Pagination.Last onClick={() => paginate(totalPages)} disabled={currentPage === totalPages} />
          </Pagination>
        </Container>
      </>
    )
  }
}

export default CardListPage;