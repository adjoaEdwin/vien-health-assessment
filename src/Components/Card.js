import styled from "styled-components";
import { MoreHoriz } from "Icons";

const Card = ({ children, header, ...props }) => {
  return (
    <Wrapper {...props}>
      {header && (
        <Header>
          <div className="header__content">{header.content}</div>
          <div className="header__dropdown">
            <MoreHoriz />
          </div>
        </Header>
      )}
      <div className="card__content">{children}</div>
    </Wrapper>
  );
};

/**
 * styles
 */
const Wrapper = styled.div`
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.04);
  border: solid 1px var(--grey-2);
  background-color: var(--white);
  border-radius: 4px;
  padding: 20px 24px;
`;

const Header = styled.div`
  border-bottom: solid 1px var(--grey-2);
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  display: flex;

  @media (min-width: 768px) {
    padding: 24px;
  }
`;

export default Card;
