import PropTypes from "prop-types";

/**
 * props definition
 */
const propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

const defaultProps = {
  size: 24,
  color: "var(--black-40)",
};

const Menu = ({ size, color, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 21C11.328 21 12 20.328 12 19.5C12 18.672 11.328 18 10.5 18H1.5C0.672 18 0 18.672 0 19.5C0 20.328 0.672 21 1.5 21H10.5ZM22.5 13.5C23.328 13.5 24 12.828 24 12C24 11.172 23.328 10.5 22.5 10.5H1.5C0.672 10.5 0 11.172 0 12C0 12.828 0.672 13.5 1.5 13.5H22.5ZM16.5 6C17.328 6 18 5.328 18 4.5C18 3.672 17.328 3 16.5 3H1.5C0.672 3 0 3.672 0 4.5C0 5.328 0.672 6 1.5 6H16.5Z"
      fill={color}
    />
  </svg>
);

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default Menu;
