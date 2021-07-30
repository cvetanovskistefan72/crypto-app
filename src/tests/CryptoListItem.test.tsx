import { fireEvent, render } from "@testing-library/react";
import CryptoListItem from "../components/CryptoListItem";
const mockCryptoItem = {
  id: "ethereum",
  icon: "https://static.coinstats.app/coins/EthereumOCjgD.png",
  name: "Ethereum",
  symbol: "ETH",
  rank: 2,
  price: 2343.1857670462155,
  priceBtc: 0.06046527507319139,
  marketCap: 273917898907.10132,
  priceChange1d: 1.26,
};
test("CryptoListItem should be rendered", () => {
  const getCryptoItem = jest.fn();
  const { getByTestId } = render(
    <CryptoListItem getCryptoItem={getCryptoItem} cryptoItem={mockCryptoItem} />
  );

  expect(getByTestId("crypto-list-item")).toBeInTheDocument();
});

test("getCryptoItem should be called", () => {
  const getCryptoItem = jest.fn();
  const { getByTestId } = render(
    <CryptoListItem getCryptoItem={getCryptoItem} cryptoItem={mockCryptoItem} />
  );
  fireEvent.click(getByTestId("crypto-list-item"));

  expect(getCryptoItem).toBeCalledTimes(1);
});
