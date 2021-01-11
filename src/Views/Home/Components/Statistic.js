import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";

import { Card } from "Components";

/**
 * props definition
 */
const propTypes = {
  percentage: PropTypes.number.isRequired,
  progress: PropTypes.number,
  variant: PropTypes.oneOf(["progress", "chart"]),
  header: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  extra: PropTypes.string,
  meta: PropTypes.string.isRequired,
  color: PropTypes.string,
  data: PropTypes.object,
};

const defaultProps = {
  variant: "progress",
  color: "var(--green-80)",
};

const Statistic = ({
  percentage,
  progress,
  variant,
  header,
  value,
  extra,
  color,
  data,
  meta,
  ...props
}) => (
  <Wrapper {...props}>
    <div className="content">
      <div className="statistic__value">
        <p className="header">{header}</p>
        <span className="meta">{meta}</span>
      </div>
      <div className="statistic__value">
        <h4 className="value">{value}</h4>
        <span className="percentage" style={{ color }}>
          {percentage > 0 ? "+" : "-"}
          {percentage}%
        </span>
      </div>
      <div className="statistic__value">
        {variant === "progress" && (
          <div className="progress-bar">
            <span className="bar"></span>
          </div>
        )}
        {variant === "chart" && <Graph {...{ data, color }} />}
      </div>
      {extra && <span className="extra">{extra}</span>}
    </div>
  </Wrapper>
);

/**
 * graph
 * @param {} param0
 * @returns
 */
const Graph = ({ data, color }) => {
  data = {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      { label: "", backgroundColor: color, data: [5, 3, 2, 9, 7, 5, 6] },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            display: false,
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            fontSize: 12,
          },
        },
      ],
    },
  };

  return (
    <BarWrapper>
      <Bar {...{ data, options }} />
    </BarWrapper>
  );
};

/**
 * styles
 */
const BarWrapper = styled.div`
  position: relative;
  height: 64px;
  width: 100%;
`;

const Wrapper = styled(Card)`
  .statistic__value {
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
    display: flex;

    &:last-child {
      margin-bottom: 0px;
    }
  }

  .header {
    font-size: 16px;
    line-height: 1.8;
    font-weight: 500;
    color: var(--black-80);
  }

  h4 {
    font-size: 36px;
    line-height: 1.3;
    font-weight: 400;
    color: var(--black);
  }

  .meta {
    font-size: 14px;
    line-height: 1.8;
    text-align: right;
    color: var(--grey);
  }

  .progress-bar {
    height: 4px;
    width: 100%;
    position: relative;
    background: var(--grey-3);
    border-radius: 2px;
    box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
  }

  .progress-bar > span {
    display: block;
    border-radius: 2px;
    width: 65%;
    height: 100%;
    background: var(--green);
  }

  .extra {
    font-size: 12px;
    color: var(--black-40);
    line-height: 1.4;
  }
`;

Statistic.propTypes = propTypes;
Statistic.defaultProps = defaultProps;

export default Statistic;
