import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

export const HeaderPartial = () => {
  return (
    <Navbar  bg="secondary" expand="lg">
      <Container>
        <Navbar.Brand className='nav-bar' href="#home">DescomPin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="minhas-pastas">Minhas pastas</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}