import { Navbar, Container, Nav, Button, Form, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/card?name=${searchTerm}`);
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-top">
      <Container>
        <Navbar.Brand href="/">React-TCG-Pokemon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="me-sm-2"
                />
              </Col>
              <Col xs="auto">
                <Button className='me-3' type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
          <Button className='mt-2' variant="danger" onClick={clearLocalStorage}>Vider le Cache</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;