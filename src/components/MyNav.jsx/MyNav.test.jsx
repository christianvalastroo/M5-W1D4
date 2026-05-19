import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

import MyNav from "./MyNav"
import { ThemeProvider } from "../../context/ThemeHome/ThemeHome"

describe("MyNav component", () => {
    it("should update the input value correctly", () => {
        const setSearch = vi.fn()

        render(
            <BrowserRouter>
                <ThemeProvider>
                    <MyNav search="" setSearch={setSearch} />
                </ThemeProvider>
            </BrowserRouter>
        )

        const input = screen.getByPlaceholderText(/cerca un libro/i)

        fireEvent.change(input, {
            target: { value: "harry" },
        })

        expect(setSearch).toHaveBeenCalledWith("harry")
    })

    it("should toggle theme button text", () => {
        const setSearch = vi.fn()

        render(
            <BrowserRouter>
                <ThemeProvider>
                    <MyNav search="" setSearch={setSearch} />
                </ThemeProvider>
            </BrowserRouter>
        )

        const themeButton = screen.getByRole("button", { name: /dark/i })

        expect(themeButton).toBeInTheDocument()

        fireEvent.click(themeButton)

        expect(screen.getByRole("button", { name: /light/i })).toBeInTheDocument()
    })
})