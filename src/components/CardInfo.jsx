import React from 'react';
import { Card, Button, Container, Row, Col, ListGroup } from 'react-bootstrap';

const CardInfo = ({ pokemon }) => {
  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="mt-5">
    <Card className="shadow-lg rounded text-center">
        <Row className="justify-content-center">
            <Col md={6}>
                {/* Image du Pokémon */}
                <Card.Img 
                  variant="top" 
                  src={pokemon.image + "/high.webp"} 
                  className="img-fluid p-3"
                />
            </Col>
            <Col md={6}>
                <Card.Body>
                    {/* Nom et Type */}
                    <Card.Title>
                        <img src={pokemon.set.logo + ".webp"} alt="" />
                        <h2 className="fw-bold">{pokemon.name}</h2>
                        <h5 className="text-muted">Pokémon de base</h5>
                    </Card.Title>

                    {/* PV */}
                    <h4 className="fw-bold">PV {pokemon.hp}</h4>

                    {/* Attaque principale */}
                    <ListGroup variant="flush" className="my-3">
                      {pokemon.attacks && pokemon.attacks.map((attack, index) => (
                        <ListGroup.Item key={index} className="text-start">
                          <strong>{attack.name}</strong> ({attack.cost.join(', ')} étoiles)  
                          <br />
                          <small className="text-muted">Dégâts : {attack.damage}</small>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>

                    {/* Statistiques */}
                    <ListGroup variant="flush" className="mb-3">
                      {pokemon.weaknesses && pokemon.weaknesses.map((weakness, index) => (
                        <ListGroup.Item key={index}>Faiblesse : {weakness.type} {weakness.value}</ListGroup.Item>
                      ))}
                      <ListGroup.Item>Résistance : {pokemon.resistance || 'N/A'}</ListGroup.Item>
                      <ListGroup.Item>Coût de retraite : {pokemon.retreat}</ListGroup.Item>
                    </ListGroup>

                    {/* Boutons */}
                    <div className="d-grid gap-2">
                      <Button variant="warning" className="rounded-pill fw-bold">Chercher {pokemon.name} dans le Pokédex</Button>
                      <Button variant="danger" className="rounded-pill fw-bold">Plus de cartes</Button>
                    </div>
                </Card.Body>
            </Col>
        </Row>
    </Card>
    </Container>
  );
};

export default CardInfo;
