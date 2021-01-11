import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";

import { MoreHoriz } from "Icons";
import { Card } from "Components";

const PieChart = ({
  header,
  className,
  children,
  items,
  color,
  progress,
  ...props
}) => (
  <Wrapper {...{ className }}>
    <div className="header">
      <div className="header__content">
        <div
          className="header__content__icon"
          style={{ backgroundColor: color || "var(--green)" }}
        >
          <header.icon color="#fff" className="m-auto" />
        </div>
        <div>
          <p className="header__content__title">{header.title}</p>
          <p className="header__content__caption">{header.caption}</p>
        </div>
      </div>
      <div className="header__dropdown">
        <MoreHoriz />
      </div>
    </div>
    <div className="content">
      <div className="content__piechart">
        <Doughnut
          data={{
            labels: ["", ""],
            datasets: [
              {
                label: "",
                data: [progress, 100 - progress],
                backgroundColor: [color || "#016450", "#e8e8e8"],
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: false,
            },
          }}
        />
      </div>
      <div className="content__items">
        {items?.map((item, key) => (
          <div className="item" key={key}>
            <p className="item__header">{item.value}</p>
            <p className="item__caption">{item.caption}</p>
          </div>
        ))}
      </div>
    </div>
  </Wrapper>
);

/**
 * styles
 */

const Wrapper = styled(Card)`
  padding: 0px;

  .header,
  .content {
    padding: 16px;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: solid 1px var(--grey-2);

    &__content {
      display: flex;
      align-items: center;

      &__icon {
        width: 36px;
        height: 36px;
        display: flex;
        margin-right: 16px;
        border-radius: 4px;
      }

      &__title {
        font-weight: 500;
        line-height: 1.6;
      }

      &__caption {
        font-size: 12px;
        line-height: 1.4;
      }
    }
  }

  .content {
    display: grid;
    grid-template-columns: 60% 40%;

    &__piechart {
      position: relative;
      height: 128px;
    }

    &__items {
      .item {
        padding: 12px;
        text-align: right;
        border-bottom: solid 1px var(--grey-2);

        &__header {
          font-size: 20px;
          font-weight: 500;
          line-height: 1.38;
        }

        &__caption {
          font-size: 12px;
          color: var(--black-40);
        }

        &:nth-child(2) {
          border: none;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .header,
    .content {
      padding: 16px 24px;
    }

    .content {
      padding: 24px;
    }
  }
`;

export default PieChart;
