import React from 'react';
import { Card, Button, Container, Row, Col, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CardInfo = ({ pokemon }) => {
  if (!pokemon) {
    return <div>Loading...</div>;
  }

  const navigate = useNavigate();

  const handleCardClick = () => {
    const baseName = pokemon.name.split(' ')[0];
    navigate(`/card?name=${baseName}`);
  };

  return (
    <Container className="mt-5">
      <Card className="shadow-lg rounded text-center" style={{ position: 'relative', minHeight: '500px' }}>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card.Img 
              variant="top" 
              src={pokemon.image + "/high.webp"} 
              className="img-fluid p-3"
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>
                <img className="img-fluid" src={pokemon.set.logo + ".webp"} alt="" />
                <h2 className="fw-bold">{pokemon.name}</h2>
                <h5 className="text-muted">{pokemon.category}</h5>
              </Card.Title>

              {pokemon.hp && (
                <h4 className="fw-bold">PV {pokemon.hp}</h4>
              )}

              {pokemon.abilities && pokemon.abilities.length > 0 && (
                <ListGroup variant="flush" className="my-3">
                  {pokemon.abilities.map((ability, index) => (
                    <ListGroup.Item key={index} className="text-start">
                      <strong>{ability.name}</strong>
                      <br />
                      <small className='text-muted'><u>Effet</u> : {ability.effect }</small>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}

              <ListGroup variant="flush" className="my-3">
                {pokemon.attacks && pokemon.attacks.map((attack, index) => (
                  <ListGroup.Item key={index} className="text-start">
                    <strong>{attack.name}</strong> ({attack.cost.join(', ')} étoiles)  
                    {attack.effect && (
                      <>
                        <br />
                        <small className="text-muted"><u>Effet</u> : {attack.effect}</small>
                      </>
                    )}
                    {attack.damage && (
                      <>
                        <br />
                        <small className="text-muted"><u>Dégâts</u> : {attack.damage}</small>
                      </>
                    )}
                  </ListGroup.Item>
                ))}
                {pokemon.effect && (
                  <ListGroup.Item className="text-start">
                    <small className="text-muted"><u>Effet</u> : {pokemon.effect}</small>
                  </ListGroup.Item>
                )}
              </ListGroup>

              <ListGroup variant="flush" className="mb-3">
                {pokemon.weaknesses && pokemon.weaknesses.map((weakness, index) => (
                  <ListGroup.Item key={index}>Faiblesse : {weakness.type} {weakness.value}</ListGroup.Item>
                ))}
                {pokemon.resistances && pokemon.resistances.map((resistance, index) => (
                  <ListGroup.Item key={index}>Résistance : {resistance.type} {resistance.value}</ListGroup.Item>
                ))}
                {pokemon.retreatCost && (
                  <ListGroup.Item>Coût de retraite : {pokemon.retreatCost.join(', ')}</ListGroup.Item>
                )}
              </ListGroup>
              <div className="d-grid gap-2">
                <Button variant="warning" className="rounded-pill fw-bold" onClick={handleCardClick}>
                  Chercher {pokemon.name.split(' ')[0]} dans le Pokédex
                </Button>
                <Button href="/" variant="danger" className="rounded-pill fw-bold">Plus de cartes</Button>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default CardInfo;
