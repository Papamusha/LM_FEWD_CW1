import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavMain() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Totally Real Cookery Application</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Our Menu</Nav.Link>
            <Nav.Link href="/shopping">Ingredients List</Nav.Link>
            <NavDropdown title="Other Options" id="basic-nav-dropdown">
              <NavDropdown.Item href="/search">Nut Search</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/barchart">
                Bar Chart That Doesn't Work
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMain;