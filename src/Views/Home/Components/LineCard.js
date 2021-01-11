import { Card } from "Components";
import { Line } from "react-chartjs-2";
import styled from "styled-components";

const LineCard = ({ header, className, color, grabient, ...prop }) => {
  const options = {
    responsive: true,

    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          position: "right",
          gridLines: {
            display: true,
            drawBorder: false,
            color: "#EAEDF3",
            zeroLineColor: "#EAEDF3",
          },
          ticks: {
            display: true,
            autoSkip: true,
            fontColor: "#9ea0a5",
            fontSize: 11,
            maxTicksLimit: 4,
            min: 0,
            stepSize: 3,
            callback: function (value, index, values) {
              return value <= 3
                ? "$" + value
                : "$" + Intl.NumberFormat().format(value / 1000) + "K";
            },
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false,
            color: "#EAEDF3",
          },
          ticks: {
            fontColor: "#9ea0a5",
            fontSize: 9,
          },
        },
      ],
    },
  };

  const graphData = (canvas) => {
    return {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "",
          data: [8000, 5000, 6000, 9000, 7000, 4000, 5000],
          fill: true,
          backgroundColor: grabient,
          borderColor: color || "#FF8433",
          pointRadius: 3,
          borderWidth: 1.51847,
          lineTension: 0,
          pointHoverRadius: 5,
          pointBackgroundColor: color || "#FF8433",
          pointHoverBackgroundColor: color || "#FF8433",
        },
      ],
    };
  };

  return (
    <Wrapper {...{ header, className }}>
      <Line {...{ data: graphData, options }} />
    </Wrapper>
  );
};

const Wrapper = styled(Card)`
  padding: 0px;

  .card__content {
    position: relative;
    padding: 24px;
    padding-bottom: 0px;
    height: 172px;
  }
`;

export default LineCard;
