import { Alert } from "react-bootstrap"

const Welcome = () => {
    return (
        <Alert variant="secondary" className="text-center">
            <h1>Benvenuto su EpiBooks 📚</h1>
            <p>Scegli il tuo libro preferito</p>
        </Alert>
    )
}

export default Welcome