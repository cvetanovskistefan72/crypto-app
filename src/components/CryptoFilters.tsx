import React, { useState } from "react";
import { CryptoItem } from "../models/models";
import styles from "./CryptoFilters.module.scss";

interface CryptoFiltersProps {
  setFilteredCryptoList: Function;
  cryptoList: CryptoItem[];
}

const CryptoFilters: React.FC<CryptoFiltersProps> = ({
  setFilteredCryptoList,
  cryptoList,
}) => {
  const [name, setName] = useState("");
  return (
    <div data-testid="crypto-filters" className={styles.root}>
      <input
        type="text"
        placeholder="Search"
        aria-label="search"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          if (e.target.value) {
            const newList = cryptoList.filter(
              (coin: CryptoItem) =>
                coin.name
                  .toLowerCase()
                  .startsWith(e.target.value.toLowerCase()) ||
                coin.symbol
                  .toLowerCase()
                  .startsWith(e.target.value.toLowerCase())
            );
            setFilteredCryptoList(newList);
          } else {
            setFilteredCryptoList(cryptoList);
          }
        }}
      />
    </div>
  );
};

export default CryptoFilters;
