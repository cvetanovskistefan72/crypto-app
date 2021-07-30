import React, { useEffect, useState } from "react";
import { standardRanges } from "../config/config";
import styles from "./CryptoRangeSelect.module.scss";

interface CryptoRangeSelectProps {
  cryptoId: string | undefined;
  getCryptoChart: Function;
  setSelectedRange: Function;
  cryptoChartData: Array<number[]>;
  loading: boolean;
  rangeIndex: number;
  setRangeIndex: Function;
}

const CryptoRangeSelect: React.FC<CryptoRangeSelectProps> = ({
  cryptoId,
  getCryptoChart,
  setSelectedRange,
  cryptoChartData,
  loading,
  rangeIndex,
  setRangeIndex,
}) => {
  return (
    <>
      {!loading && cryptoChartData && (
        <div data-testid="crypto-range" className={styles.root}>
          {standardRanges.map((range, i) => (
            <span
              key={i}
              onClick={() => {
                setRangeIndex(i);
                setSelectedRange(range);
                getCryptoChart(cryptoId, range);
              }}
              className={i === rangeIndex ? styles.selected : ""}
            >
              {range}
            </span>
          ))}
        </div>
      )}
    </>
  );
};

export default CryptoRangeSelect;
