import React from "react";
import { CryptoChartProps } from "../models/models";
import { Bar } from "react-chartjs-2";
import styles from "./CryptoChart.module.scss";

const CryptoChart: React.FC<CryptoChartProps> = ({
  chartData,
  selectedRange,
}) => {
  const modifiedChartData = chartData.map((chartData) => [chartData[1]]).flat();
  const cryptoDates = modifiedChartData
    .map((price, i) => {
      const currentDate = new Date();
      if (selectedRange === "24h") {
        currentDate.setMinutes(currentDate.getMinutes() - i * 2);
      } else {
        currentDate.setDate(currentDate.getDate() - i);
      }

      return selectedRange === "24h"
        ? currentDate.toLocaleString().split(",")[1]
        : currentDate.toLocaleString().split(",")[0];
    })
    .reverse();
  return (
    <div className={styles.root}>
      <Bar
        data={{
          labels: cryptoDates,
          datasets: [
            {
              label: "Price",
              data: modifiedChartData,
              borderColor: "#2471a3",
              type: "line",
            },
          ],
        }}
        width={100}
        height={300}
        options={{
          maintainAspectRatio: false,

          elements: {
            point: {
              radius: 0,
            },
          },
        }}
      />
    </div>
  );
};

export default CryptoChart;
