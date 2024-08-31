import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("Contact Us Component test cases", () => {

it("test load of Component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});

it("test load of button inside Component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
});

it("test load of Text inside Component", () => {
    render(<Contact />);
    const msg = screen.getByText("Your message");
    expect(msg).toBeInTheDocument();
});

test("test to load 3 input text boxes inside Component", () => {
    render(<Contact />);
    const inputs = screen.getAllByRole("textbox");
    expect(inputs.length).toBe(3);
});

});