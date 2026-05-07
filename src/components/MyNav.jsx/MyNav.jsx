import { Navbar, Container, Nav, Form } from "react-bootstrap";

const MyNav = ({search, setSearch}) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">EpiBooks</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>
                    <Nav.Link href="#">Browse</Nav.Link>
                </Nav>

                <Form.Control
                type="search"
                placeholder="Cerca un libro.."
                className="ms-3"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
            </Container>
        </Navbar>
    )
}

export default MyNav
