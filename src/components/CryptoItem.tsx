import React from "react";
import NumberFormat from "react-number-format";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { CryptoItem as CryptoItemModal } from "../models/models";
import styles from "./CryptoItem.module.scss";

interface CryptoItemProps {
  cryptoItem: CryptoItemModal | undefined;
}

const CryptoItem: React.FC<CryptoItemProps> = ({ cryptoItem }) => {
  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <img src={cryptoItem?.icon} />
        <div className={styles.text}>
          <h2>
            {cryptoItem?.name} ({cryptoItem?.symbol})
          </h2>
          <div className={styles.tags}>
            <span>Rank #{cryptoItem?.rank}</span>
            <span>
              <NumberFormat
                value={cryptoItem?.marketCap}
                className="foo"
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                //@ts-ignore
                renderText={(value, props) => <div {...props}>{value} MC</div>}
              />
            </span>
            <span>
              <NumberFormat
                value={cryptoItem?.priceBtc}
                className="foo"
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                //@ts-ignore
                renderText={(value, props) => <div {...props}>{value} BTC</div>}
              />
            </span>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <h2>
          <NumberFormat
            value={cryptoItem?.price.toString().slice(0, 9)}
            className="foo"
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            //@ts-ignore
            renderText={(value, props) => (
              <div
                style={{
                  backgroundColor: "black",
                  color: "white",
                  padding: "0.25rem",
                  borderRadius: "0.5rem",
                }}
                {...props}
              >
                {value}
              </div>
            )}
          />
          <div
            className={styles.priceChange}
            style={{
              backgroundColor:
                cryptoItem && cryptoItem?.priceChange1d > 0 ? "green" : "red",
            }}
          >
            <FontAwesomeIcon
              style={{ marginRight: "5px" }}
              icon={
                cryptoItem && cryptoItem?.priceChange1d > 0
                  ? faCaretUp
                  : faCaretDown
              }
            />
            <span>{cryptoItem?.priceChange1d}%</span>
          </div>
        </h2>
      </div>
    </div>
  );
};

export default CryptoItem;
