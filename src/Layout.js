import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useContext } from "react";
import { ShoppingCartContext } from "./utils/ShoppingCartUtils";

const Layout = () => {
  const { productList } = useContext(ShoppingCartContext);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="#home">Joyas Geda</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Inicio</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/catalog">
                <Nav.Link>Catalogo</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>
                  Carrito <Badge bg="secondary">{productList.length}</Badge>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/va-a-dar-error404">
                <Nav.Link>Test Error 404</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="my-2">
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
