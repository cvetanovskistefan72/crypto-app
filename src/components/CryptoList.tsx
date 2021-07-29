import React from "react";
import CryptoListItem from "./CryptoListItem";
import Loading from "./Loading";
import { CryptoListProps } from "../models/models";
import styles from "./CryptoList.module.scss";

const CryptoList: React.FC<CryptoListProps> = ({ cryptoList,getCryptoItem, loading }) => {
  return (
    <div className={styles.root}>
      {loading ? (
        <div className={styles.loading}>
          <Loading />
        </div>
      ) : (
        <>
          {cryptoList && cryptoList.length ? (
            cryptoList?.map((coin) => (
              <CryptoListItem
                key={coin.id}
                getCryptoItem={getCryptoItem}
                cryptoItem={coin}
              />
            ))
          ) : (
            <div className={styles.notFound}>
              <span>No result found!</span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CryptoList;
