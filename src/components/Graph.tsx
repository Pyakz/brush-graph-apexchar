import { useState } from "react";
import Data from "../data/data.json";
import Chart from "react-apexcharts";
import AddAnnotationModal from "./modals/AddAnnotationModal";
import ApexCharts from "apexcharts";

const revenue = Data.map((x) => Number(x.Revenue));
const dates = Data.map((x) => x.Date);

type GraphProps = {};

export default function Graph({}: GraphProps) {
  const [capturedIndex, setCapturedIndex] = useState(0);

  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Options for Main Graph
  const options = {
    chart: {
      id: "chart1",
      type: "line",
      height: 230,
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
      events: {
        click: function (_: any, __: any, config: any) {
          // get capturedDataPointIndex
          setCapturedIndex(config.globals.capturedDataPointIndex);
          openModal();
        },
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
  };

  // Options for Brush Graph Below
  const options2 = {
    chart: {
      id: "chart2",
      height: 120,
      type: "bar",
      foreColor: "#ccc",
      brush: {
        target: "chart1",
        enabled: true,
      },
      selection: {
        enabled: true,
        fill: {
          color: "#fff",
          opacity: 0.2,
        },
        xaxis: {
          min: new Date("Aug 01 2022").getTime(),
          max: new Date().getTime(),
        },
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
        series={[{ data: revenue, name: "Series - 1 - Selector" }]}
        type="area"
        height={180}
      />

      <AddAnnotationModal
        open={open}
        handleClose={handleClose}
        addAnnotation={(annotation: string) => {
          // Add Annotation to the UI before closing the modal
          ApexCharts.exec("chart1", "addXaxisAnnotation", {
            x: new Date(dates[capturedIndex]).getTime(),
            label: {
              borderColor: "#FF4560",
              borderWidth: 4,
              style: {
                color: "#fff",
                background: "#FF4560",
                fontSize: "1.5rem",
              },
              text: annotation,
            },
          });

          handleClose();
        }}
      />
    </>
  );
}
