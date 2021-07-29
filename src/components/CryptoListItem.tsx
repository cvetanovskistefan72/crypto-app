import React from "react";
import { CryptoItem } from "../models/models";
import NumberFormat from "react-number-format";
import styles from "./CryptoListItem.module.scss";

interface CryptoListItemProps {
  cryptoItem: CryptoItem;
  getCryptoItem: Function;
}

const CryptoListItem: React.FC<CryptoListItemProps> = ({
  cryptoItem,
  getCryptoItem,
}) => {
  return (
    <div onClick={()=>{getCryptoItem(cryptoItem.id)}} className={styles.root}>
      <div className={styles.left}>
        <div className={styles.img}>
          <img src={cryptoItem?.icon} alt="" />
        </div>
        <div className={styles.text}>
          <span>{cryptoItem?.symbol}</span>
          <span>
            <NumberFormat
              value={cryptoItem?.price.toString().slice(0, 9)}
              className="foo"
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
              //@ts-ignore
              renderText={(value, props) => <div {...props}>{value}</div>}
            />
          </span>
        </div>
      </div>
      <div className={styles.stats}>
        <span style={{ color: cryptoItem.priceChange1d > 0 ? "green" : "red" }}>
          {cryptoItem.priceChange1d}%
        </span>
      </div>
    </div>
  );
};

export default CryptoListItem;
