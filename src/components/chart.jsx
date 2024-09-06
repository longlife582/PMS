import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import Messagestrip from "../components/messagestrip";

const RentStatisticsChart = () => {
  const [activeControl, setActiveControl] = useState("TI");
  const [chartData, setChartData] = useState([]);
  const [totals, setTotals] = useState({
    totalIncome: 0,
    installmentalRent: 0,
    annualRent: 0,
  });

  const totalIncomeData = [
    {
      name: "Total Income",
      data: [
        120000, 310000, 120500, 105000, 200000, 340000, 300000, 200000, 140500,
        231500, 280000, 430000,
      ],
    },
  ];

  const installmentalRentData = [
    {
      name: "Installmental Rent",
      data: [
        110500, 200000, 180000, 195000, 220000, 250000, 400000, 450000, 620000,
        435000, 550000, 570000,
      ],
    },
  ];

  const annualRentData = [
    {
      name: "Annual Rent",
      data: [240000, 283000, 120500, 105000, 200000],
    },
  ];

  useEffect(() => {
    updateChart();
    updateTotals();
  }, [activeControl]);

  const updateChart = () => {
    let data;
    if (activeControl === "TI") data = totalIncomeData;
    else if (activeControl === "IR") data = installmentalRentData;
    else if (activeControl === "AR") data = annualRentData;

    setChartData(data);
  };

  const updateTotals = () => {
    const total = (arr) => arr.reduce((acc, cur) => acc + cur, 0);

    setTotals({
      totalIncome: total(totalIncomeData[0].data),
      installmentalRent: total(installmentalRentData[0].data),
      annualRent: total(annualRentData[0].data),
    });
  };

  const chartDataChangeHandler = (type) => {
    setActiveControl(type);
  };

  const options = {
    chart: {
      height: 300,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      width: [2, 4, 3],
      curve: "straight",
      dashArray: [0, 8, 5],
    },
    title: {
      text: "Rent Statistics",
      align: "left",
    },
    legend: {
      tooltipHoverFormatter: function (val, opts) {
        return (
          val +
          " - <strong>" +
          opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
          "</strong>"
        );
      },
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6,
      },
    },
    xaxis: {
      categories: [
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",
        "2024",
      ],
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              return val + " (mins)";
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val + " per session";
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val;
            },
          },
        },
      ],
    },
    grid: {
      borderColor: "#f1f1f1",
    },
  };

  return (
    <>
      <div id="spmAnalyticsChart" className="spmAnalyticsChart">
        <div className="chartControl">
          <h1>Analytics</h1>
          <div
            className={`control ${
              activeControl === "TI" ? "controlActive" : ""
            }`}
            id="TI"
            onClick={() => chartDataChangeHandler("TI")}
          >
            <h3>Total Income</h3>
            <h2>
              &#8358;
              <span id="totalIncome">
                {totals.totalIncome.toLocaleString()}
              </span>
            </h2>
          </div>
          <div
            className={`control ${
              activeControl === "IR" ? "controlActive" : ""
            }`}
            id="IR"
            onClick={() => chartDataChangeHandler("IR")}
          >
            <h3>Installmental</h3>
            <h2>
              &#8358;
              <span id="installmentalRent">
                {totals.installmentalRent.toLocaleString()}
              </span>
            </h2>
          </div>
          <div
            className={`control ${
              activeControl === "AR" ? "controlActive" : ""
            }`}
            id="AR"
            onClick={() => chartDataChangeHandler("AR")}
          >
            <h3>Annual Rent</h3>
            <h2>
              &#8358;
              <span id="annualRent">{totals.annualRent.toLocaleString()}</span>
            </h2>
          </div>
        </div>

        <div id="chart">
          <Chart
            options={options}
            series={chartData}
            type="line"
            height={300}
          />
        </div>
      </div>
    </>
  );
};

export default RentStatisticsChart;
