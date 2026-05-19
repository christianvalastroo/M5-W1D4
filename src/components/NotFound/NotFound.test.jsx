import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NotFound from "./NotFound"

describe("NotFound component", () => {
    it("should render not found message", () => {
        render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>
        )

        const message = screen.getByText(/pagina non trovata/i)

        expect(message).toBeInTheDocument()
    })

    it("should render home button", () => {
        render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>
        )

        const button = screen.getByRole("button", { name: /torna alla home/i })

        expect(button).toBeInTheDocument()
    })
})