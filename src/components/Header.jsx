import { Navbar, Container, Nav, Button, Form, Row, Col, NavDropdown} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode')
    return savedTheme == 'true';
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'light');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/card?name=${searchTerm}`);
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-top">
      <Container>
        <Navbar.Brand href="/">React-TCG-Pokemon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="Langues" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Français</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Englais
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Japonais</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
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
          <Button variant="danger" onClick={clearLocalStorage}>Vider le Cache</Button>
          <Form.Check 
            type="switch"
            id="custom-switch"
            label="Dark Mode"
            checked={darkMode}
            onChange={toggleDarkMode}
            className="ms-3"
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;