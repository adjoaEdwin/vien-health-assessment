import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  type: PropTypes.oneOf(["submit", "button"]),
  variant: PropTypes.oneOf(["default"]),
};

const defaultProps = {
  height: "32px",
  width: "auto",
  type: "button",
  variant: "default",
};

const Button = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

const Wrapper = styled.button`
  border: none;
  display: flex;
  font-weight: 500;
  padding: 0px 2rem;
  border-radius: 6px;
  align-items: center;
  justify-content: center;

  width: ${({ width }) => width};
  height: ${({ height }) => height};

  ${({ variant }) => {
    switch (variant.toLowerCase()) {
      default:
        return "background-color: var(--green); color: #fff";
    }
  }}
`;

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
