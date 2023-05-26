import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './styles.css';
const NavBar = () => {
    const navigate = useNavigate();

    const handleNavigate = (e: React.MouseEvent, link: string) => {
        e.preventDefault();
        navigate(link);
    }

    return (
    <Navbar variant="dark" bg="dark" expand="lg" style={{marginBottom: '30px'}}>
        <Container fluid>
            <Navbar.Brand onClick={(e) => handleNavigate(e, '/')}>React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
            <Nav>
                <NavDropdown
                    id="nav-dropdown-dark-example"
                    title="☰"
                    menuVariant="dark"
                    style={{fontSize: '40px'}}
                >
                    <NavDropdown.Item onClick={(e) => handleNavigate(e, `/`)}>Posts</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={(e) => handleNavigate(e, `/about`)}>About</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}
export default NavBar;