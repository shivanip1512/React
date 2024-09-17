import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body"
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import mockData from "../../../__mocks__/ResListApiDataMock.json"
import { act } from "react";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(mockData);
        }
    })
});

it("Should render the body component with Search button", async () => {
    await act(async() =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );

    const searchBtn = screen.getByRole("button", { name: "Search" });
    expect(searchBtn).toBeInTheDocument();

    const searchInput = screen.getByPlaceholderText("Search Restaurant");

    fireEvent.change(searchInput, { target: { value: "pizza" } });
    fireEvent.click(searchBtn);

    // screen should load 4 cards
    const resCards = screen.getAllByTestId("resCard");
    expect(resCards.length).toBe(4);
});