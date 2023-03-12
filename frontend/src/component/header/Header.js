import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <>
            
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        {/* <Nav.Link href="/"></Nav.Link> */}
                    </Nav>
                </Container>
            </Navbar>
        </>

    )
}

export default Header;