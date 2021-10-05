import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavDropdown } from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
            <div>

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Online_Pharmacy</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#features">Pharmacy_Preview</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                                <NavDropdown title="Admin Ops" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="/displayInventory">Display Inventory</NavDropdown.Item>
                                    <NavDropdown.Item href="/displaysoldmeds">Display Sales Data</NavDropdown.Item>
                                    <NavDropdown.Item href="/displaysupplier">Display supplier details</NavDropdown.Item>
                                    <NavDropdown.Item href="/displayempstocks">Display empty stocks</NavDropdown.Item>
                                    <NavDropdown.Item href="/displayremstocks">Display remaining stocks</NavDropdown.Item>

                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/addinventory">Add pharmacy inventory</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="User Ops" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="/medicineSale">Buy Medicine</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/cartdisplay">Show My cart</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
export default Header;
