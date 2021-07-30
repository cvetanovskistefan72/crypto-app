import { fireEvent, render } from "@testing-library/react";
import CryptorangeSelect from "../components/CryptoRangeSelect";

test("CryptorangeSelect should be rendered", () => {
  const { getByTestId } = render(
    <CryptorangeSelect
      cryptoId={"bitcoin"}
      getCryptoChart={() => {}}
      setSelectedRange={() => {}}
      cryptoChartData={[
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4],
      ]}
      loading={false}
      rangeIndex={0}
      setRangeIndex={() => {}}
    />
  );
  expect(getByTestId("crypto-range")).toBeInTheDocument();
});

test("First Element should be selected should be rendered", () => {
  const { getByTestId } = render(
    <CryptorangeSelect
      cryptoId={"bitcoin"}
      getCryptoChart={() => {}}
      setSelectedRange={() => {}}
      cryptoChartData={[
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4],
      ]}
      loading={false}
      rangeIndex={0}
      setRangeIndex={() => {}}
    />
  );
  const span = getByTestId("crypto-range").querySelectorAll("span");
  expect(span[0].classList[0]).toBe("selected");
});
