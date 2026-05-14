import { Container, Button } from "react-bootstrap"
import Alert from "react-bootstrap/Alert"
import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <Container className="text-center py-5">

            <Alert variant="danger" className="p-4">
                <h1>404</h1>
                <p>Pagina non trovata</p>

                <Button as={Link} to="/" variant="dark">
                    Torna alla Home
                </Button>
            </Alert>

        </Container>
    )
}

export default NotFound
