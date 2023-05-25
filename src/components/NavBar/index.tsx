import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectUser } from "../../selectors";
import { UserEntity } from "../../types";

const NavBar = () => {
    const user = useAppSelector<UserEntity>(selectUser);
    const navigate = useNavigate();

    const handleNavigate = (e: React.MouseEvent, link: string) => {
        e.preventDefault();
        navigate(link);
    }

    return (
        <Navbar bg="secondary" variant="dark">
            <Container>
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={(e) => handleNavigate(e, '/')}>Posts</Nav.Link>
                    <Nav.Link onClick={(e) => handleNavigate(e, `/about`)}>About</Nav.Link>
                    <Nav.Link onClick={(e) => handleNavigate(e, `/user/${user.id}`)}>User</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default NavBar;