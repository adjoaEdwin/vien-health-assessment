import styled from "styled-components";

import { PieCard, LineCard, Statistic } from "./Home/Components";
import { Layout } from "Components";
import { Profile, Sales } from "Icons";

const Home = () => {
  return (
    <Layout header="Home">
      <Wrapper>
        <StatisticWrapper>
          <Statistic
            meta="Monthly Goal"
            extra="Yearly Goal"
            percentage={6.9}
            header="Sales"
            value="98.1%"
            progress={33}
          />
          <Statistic
            className="pb-0"
            color="#FF8433"
            meta="Total Profit"
            percentage={11.3}
            header="Revenue"
            value="$13,893"
            variant="chart"
          />
          <Statistic
            extra="Yearly Goal"
            meta="Subscribed"
            percentage={3.2}
            header="Clients"
            progress={65}
            value="1,232"
          />
        </StatisticWrapper>
        <SalesStatisticWrapper>
          <PieCard
            className="sales-stat__item"
            header={{
              icon: Sales,
              title: "Total Sales",
              caption: <span className="light-green-text">+$985.56</span>,
            }}
            progress={77}
            items={[
              { value: "$2,595", caption: "Invoiced" },
              { value: "23", caption: "Invoices" },
            ]}
          />
          <LineCard
            className="sales-stat__item"
            header={{ content: <Header>Daily Profit</Header> }}
            grabient="rgba(255, 132, 51, 0.10)"
          />
        </SalesStatisticWrapper>
        <UserStatisticWrapper>
          <LineCard
            className="user-stat__item"
            header={{ content: <Header>Daily active clients</Header> }}
            color="#348373"
            grabient="rgba(52, 131, 115, 0.10)"
          />
          <PieCard
            className="user-stat__item"
            header={{
              icon: Profile,
              color: "var(--yellow)",
              title: "User Onboarding",
              caption: (
                <span className="black-40-text">Q3 Goal: 8,000 User</span>
              ),
            }}
            progress={35}
            color="#facf55"
            items={[
              {
                value: "2,452",
                caption: "Onboarded",
              },
            ]}
          />
        </UserStatisticWrapper>
      </Wrapper>
    </Layout>
  );
};

/**
 * styles
 */
const Header = styled.h2`
  font-weight: 500;
  line-height: 1.6;
  font-size: 16px;
`;

const Wrapper = styled.div`
  gap: 24px;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
`;

const StatisticWrapper = styled.div`
  gap: 24px;
  display: grid;
  grid-template-columns: minmax(0, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const SalesStatisticWrapper = styled.div`
  gap: 24px;
  display: grid;
  grid-template-columns: minmax(0, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));

    .sales-stat__item {
      &:first-child {
        grid-column-start: 1;
        grid-column-end: 2;
      }

      &:last-child {
        grid-column: 2;
        grid-column-end: 4;
      }
    }
  }
`;

const UserStatisticWrapper = styled.div`
  gap: 24px;
  display: grid;
  grid-template-columns: minmax(0, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));

    .user-stat__item {
      &:first-child {
        grid-column-start: 1;
        grid-column-end: 3;
      }

      &:last-child {
        grid-column: 3;
        grid-column-end: 4;
      }
    }
  }
`;

export default Home;
