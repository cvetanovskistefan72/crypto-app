import axios from "axios";
import React, { useEffect, useState } from "react";
import CryptoList from "../components/CryptoList";
import CryptoFilters from "../components/CryptoFilters";
import CryptoItemData from "../components/CryptoItemData";
import CryptoRangeSelect from "../components/CryptoRangeSelect";
import {
  getCoinsAPI,
  standardCryptoId,
  standardRange,
  standardRangeIndex,
} from "../config/config";
import { CryptoItem as CryptoItemModel } from "../models/models";
import styles from "./CryptoPage.module.scss";

interface CryptoPageProps {}

const CryptoPage: React.FC<CryptoPageProps> = () => {
  const [cryptoList, setCryptoList] = useState([]);
  const [cryptoFilteredList, setFilteredCryptoList] = useState([]);
  const [cryptoItem, setCryptoItem] = useState<CryptoItemModel | undefined>(
    undefined
  );
  const [cryptoChartData, setCryptoChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingItem, setLoadingItem] = useState(true);
  const [selectedRange, setSelectedRange] = useState(standardRange);
  const [rangeIndex, setRangeIndex] = useState(standardRangeIndex);

  const getCryptoList = async () => {
    const { data } = await axios.get(getCoinsAPI);
    setLoading(false);
    setCryptoList(data.coins);
    setFilteredCryptoList(data.coins);
  };

  const getCryptoItem = async (id: string) => {
    if (id !== cryptoItem?.id) {
      setCryptoChartData([]);
      setLoadingItem(true);
      const { data } = await axios.get(`${getCoinsAPI}/${id}`);
      setCryptoItem(data.coin);
      setLoadingItem(false);
    }
  };

  const getCryptoChart = async (id: string | undefined, range: string) => {
    setLoadingItem(true);
    setCryptoChartData([]);
    const { data } = await axios.get(
      `https://api.coinstats.app/public/v1/charts?period=${range}&coinId=${id}`
    );
    setCryptoChartData(data.chart);
    setLoadingItem(false);
  };

  useEffect(() => {
    getCryptoList();
    getCryptoItem(standardCryptoId);
    getCryptoChart(standardCryptoId, standardRange);
  }, []);

  useEffect(() => {
    setSelectedRange(standardRange)
    setCryptoItem(cryptoItem);
    getCryptoChart(cryptoItem?.id, standardRange);
    setRangeIndex(standardRangeIndex);
  }, [cryptoItem]);

  return (
    <div className={styles.root}>
      <div className={styles.side}>
        <div className={styles.filters}>
          <CryptoFilters
            setFilteredCryptoList={setFilteredCryptoList}
            cryptoList={cryptoList}
          />
        </div>
        <div className={styles.list}>
          <CryptoList
            cryptoList={cryptoFilteredList}
            getCryptoItem={getCryptoItem}
            loading={loading}
          />
        </div>
      </div>
      <div className={styles.main}>
        <CryptoItemData
          cryptoChartData={cryptoChartData}
          loading={loadingItem}
          cryptoItem={cryptoItem}
          selectedRange={selectedRange}
        />
        <CryptoRangeSelect
          cryptoId={cryptoItem?.id}
          getCryptoChart={getCryptoChart}
          setSelectedRange={setSelectedRange}
          cryptoChartData={cryptoChartData}
          loading={loadingItem}
          rangeIndex={rangeIndex}
          setRangeIndex={setRangeIndex}
        />
      </div>
    </div>
  );
};

export default CryptoPage;
