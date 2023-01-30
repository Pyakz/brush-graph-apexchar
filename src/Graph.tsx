import React from "react";
import Data from "./data.json";
import Chart from "react-apexcharts";

type GraphProps = {};

export default function Graph({}: GraphProps) {
  const revenue = Data.map((x) => Number(x.Revenue));
  const dates = Data.map((x) => x.Date);

  const options = {
    chart: {
      id: "chart2",
      type: "line",
      height: 230,
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
    },
    colors: ["#00BAEC"],
    stroke: {
      width: 3,
    },
    grid: {
      borderColor: "#555",
      clipMarkers: false,
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      gradient: {
        enabled: true,
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    markers: {
      size: 5,
      colors: ["#000524"],
      strokeColor: "#00BAEC",
      strokeWidth: 3,
    },
    xaxis: {
      type: "datetime",
      categories: dates,
    },
    annotations: {
      yaxis: [
        {
          y: 200,
          borderColor: "#00E396",
          label: {
            borderColor: "#00E396",
            style: {
              color: "#fff",
              background: "#00E396",
            },
            text: "This is test",
          },
        },
        {
          y: 400,
          y2: 350,
          borderColor: "#00E396",
          label: {
            borderColor: "#00E396",
            style: {
              color: "#fff",
              background: "#00E396",
            },
            text: "This is test 2",
          },
        },
        {
          y: 850,
          y2: 900,
          borderColor: "#00E396",
          label: {
            borderColor: "#00E396",
            style: {
              color: "#fff",
              background: "#00E396",
            },
            text: "This is test 3",
          },
        },
      ],
      xaxis: [
        {
          x: new Date("25 Oct 2022").getTime(),
          x2: new Date("23 Oct 2022").getTime(),
          borderColor: "#00E396",
          label: {
            borderColor: "#00E396",
            orientation: "horizontal",
            style: {
              color: "#fff",
              background: "#00E396",
            },
            text: "This is test 3",
          },
        },
      ],
    },
  };

  const options2 = {
    chart: {
      id: "chart1",
      height: 130,
      type: "bar",
      foreColor: "#ccc",
      brush: {
        target: "chart2",
        enabled: true,
      },
      selection: {
        enabled: true,
        fill: {
          color: "#fff",
          opacity: 0.4,
        },
        xaxis: {},
      },
    },
    colors: ["#FF0080"],
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.91,
        opacityTo: 0.1,
      },
    },
    xaxis: {
      type: "datetime",
      categories: dates,
      tooltip: {
        enabled: false,
      },
    },
    tooltip: {
      theme: "dark",
    },
    yaxis: {
      min: 0,
      tickAmount: 4,
    },
  };

  return (
    <>
      <Chart
        // @ts-ignore
        options={options}
        series={[{ data: revenue, name: "Series - 1" }]}
        type="area"
        height={700}
      />
      <Chart
        // @ts-ignore
        options={options2}
        series={[{ data: revenue, name: "Series - 1" }]}
        type="area"
        height={180}
      />
    </>
  );
}
