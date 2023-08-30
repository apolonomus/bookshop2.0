import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

    function NavBar() {
    return (
        <Navbar data-bs-theme='dark' expand='lg' className='bg-body-tertiary'>
            <Container>
                <Navbar.Brand as={Link} to='/'>Apolo Book Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <NavDropdown title='Productos' id='basic-nav-dropdown'>
                        <NavDropdown.Item href='category/suspenso'>Suspenso</NavDropdown.Item>
                        <NavDropdown.Item href='category/romantica'>Romántica</NavDropdown.Item>
                        <NavDropdown.Item href='category/aventura'>Aventura</NavDropdown.Item>
                        <NavDropdown.Item href='category/autoayuda'>Autoayuda</NavDropdown.Item>
                        <NavDropdown.Item href='category/politica'>Política</NavDropdown.Item>
                        <NavDropdown.Item href='category/deportes'>Deportes</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <CartWidget/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavBar;