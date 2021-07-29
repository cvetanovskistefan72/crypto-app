import React from "react";
import Loading from "./Loading";
import CryptoItem from "./CryptoItem";
import CryptoChart from "./CryptoChart";
import { CryptoItem as CryptoItemModel } from "../models/models";
import styles from "./CryptoItemData.module.scss";

interface Props {
  cryptoChartData: Array<number[]>;
  cryptoItem: CryptoItemModel | undefined;
  loading: boolean;
  selectedRange: string;
}

const CryptoItemData: React.FC<Props> = ({
  cryptoItem,
  cryptoChartData,
  loading,
  selectedRange,
}) => {
  return (
    <>
      {loading ? (
        <div className={styles.loading}>
          <Loading />
        </div>
      ) : (
        <>
          {cryptoItem && <CryptoItem cryptoItem={cryptoItem} />}
          {cryptoChartData && cryptoChartData.length ? (
            <CryptoChart
              chartData={cryptoChartData}
              selectedRange={selectedRange}
            />
          ) : null}
        </>
      )}
    </>
  );
};

export default CryptoItemData;
