import { Container, Row, Col } from "react-bootstrap"
import fantasy from "../../books/fantasy.json"
import SingleBook from "../SingleBook/SingleBook"
import Alert from "react-bootstrap/Alert"
import { useState } from "react"
import "./AllTheBooks.css"

const AllTheBooks = ({ search }) => {

    // Salvo l'asin del libro selezionato per caricare le sue recensioni.
    const [selected, setSelected] = useState(null)

    // Mostro solo i libri che corrispondono alla ricerca.
    const filteredBooks = fantasy.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <Container>

            <Row className="g-4">

                {filteredBooks.length > 0 ? (

                    filteredBooks.map((book) => (
                        <Col xs={12} sm={6} md={4} lg={3} className="book-grid-col d-flex" key={book.asin}>

                            <SingleBook
                                img={book.img}
                                title={book.title}
                                price={book.price}
                                asin={book.asin}
                                selected={selected}
                                setSelected={setSelected}
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
