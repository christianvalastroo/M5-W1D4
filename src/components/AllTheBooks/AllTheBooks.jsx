import { Container, Row, Col } from "react-bootstrap"
import fantasy from "../../books/fantasy.json"
import SingleBook from "../SingleBook/SingleBook"
import Alert from 'react-bootstrap/Alert';

const AllTheBooks = ({search}) => {

    // Mostra solo i libri che contengono il testo cercato nel titolo.
    const filteredBooks = fantasy.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <Container>
            <Row className="g-4">

                {filteredBooks.length > 0 ? (

                    // Crea una card per ogni libro filtrato.
                    filteredBooks.map((book) => (
                        <Col md={3} key={book.asin}>
                            <SingleBook
                                img={book.img}
                                title={book.title}
                                price={book.price}
                                asin={book.asin}
                            />
                        </Col>
                    ))

                ) : (

                    <Col className="text-center">
                        <Alert variant="danger">
                            Nessun libro trovato per "{search}" 😢
                        </Alert>
                    </Col>

                )}

            </Row>

        </Container>
    )
}

export default AllTheBooks
