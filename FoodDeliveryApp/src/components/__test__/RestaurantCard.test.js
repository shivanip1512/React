import { render, screen } from "@testing-library/react";
import RestaurantCard, { withOfferedLabel } from "../RestaurantCard";
import MOCK_DATA from "../../../__mocks__/RestaurantCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);
    
    const restaurantName = screen.getByText("WeFit - Protein Bowls, Salads & Sandwiches");
    expect(restaurantName).toBeInTheDocument();
});

it("Should render offers for restaurant card", () => {
    const OfferedRestaurantCard = withOfferedLabel(RestaurantCard);
    render(<OfferedRestaurantCard resData={MOCK_DATA}/>);
    
    const offer = screen.getByText("ITEMS AT ₹139");
    expect(offer).toBeInTheDocument();
});