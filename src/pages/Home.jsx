import { useEffect, useState } from 'react'
import { Endpoints } from "../_services/endpoints.services";
import Card from "../components/Cards";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Home = () => {
    const [cards, setCards] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(null)
  
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
  
    if (!loaded) {
      return <div>Loading...</div>
    } else if (error) {
      return <div>Error: {error.message}</div>
    } else {
      return (
        <>
        <Container>
          <Row lg={4} md={3} sm={2} xs={1}>
          {cards.filter(card => card.image).map((card, index) => {
            return <Card card={card} key={index} />
          })}
          </Row>
        </Container>
        </>
      )
    }
}
  
export default Home