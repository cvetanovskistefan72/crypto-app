import { fireEvent, render } from "@testing-library/react";
import CryptoFilters from "../components/CryptoFilters";
const mockCryptoList = [
  {
    id: "ethereum",
    icon: "https://static.coinstats.app/coins/EthereumOCjgD.png",
    name: "Ethereum",
    symbol: "ETH",
    rank: 2,
    price: 2343.1857670462155,
    priceBtc: 0.06046527507319139,
    marketCap: 273917898907.10132,
    priceChange1d: 1.26,
  },
];
test("CryptoFilters should be rendered", () => {
  const setFilteredCryptoList = jest.fn();
  const { getByTestId } = render(
    <CryptoFilters
      setFilteredCryptoList={setFilteredCryptoList}
      cryptoList={mockCryptoList}
    />
  );

  expect(getByTestId("crypto-filters")).toBeInTheDocument();
});

test("Change input test", () => {
  const setFilteredCryptoList = jest.fn();
  const { getByLabelText } = render(
    <CryptoFilters
      setFilteredCryptoList={setFilteredCryptoList}
      cryptoList={mockCryptoList}
    />
  );
  fireEvent.change(getByLabelText(/search/i), { target: { value: "test" } });

 expect(getByLabelText(/search/i)).toHaveValue('test')
});
