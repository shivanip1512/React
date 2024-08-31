import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

test("test load of Contact Us Component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});

test("test load of button inside Contact Us Component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
});

test("test load of button inside Contact Us Component", () => {
    render(<Contact />);
    const msg = screen.getByText("Your message");
    expect(msg).toBeInTheDocument();
});

test("test to load 3 input text boxes inside Contact US component", () => {
    render(<Contact />);
    const inputs = screen.getAllByRole("textbox");
    expect(inputs.length).toBe(3);
});