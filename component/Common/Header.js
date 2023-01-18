import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="py-1 bg-primary">
        <Container>
          <Navbar.Brand href="/">
            <Image
              src="/logo.png"
              className="bg-primary   img-fluid "
              alt=""
              width="150"
              height="80"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Form className=" offset-3 d-none d-lg-flex">
              <Form.Control
                type="search"
                placeholder="Search iPhone"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/product">Shop</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            <Nav>
              <Nav.Link href="/about-us">About us</Nav.Link>
              <Nav.Link href="/contact-us">Contact us</Nav.Link>

              {/* <Nav.Link href="#">
              <i className="bi bi-heart position-relative ">
                <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                  <span className="visually-hidden">New alerts</span>
                </span>
              </i>
            </Nav.Link> */}

              {/* <Nav.Link href="#">
              <i className="bi bi-cart-dash position-relative ">
                <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                  <span className="visually-hidden">New alerts</span>
                </span>
              </i>
            </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <section>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="py-4 bg-warninglight"
        ></Navbar>
      </section> */}
    </>
  );
}

export default Header;
