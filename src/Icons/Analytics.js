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

const Analytics = ({ size, color, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.5 1.5V10.5H22.5C22.5 8.11305 21.5518 5.82387 19.864 4.13604C18.1761 2.44821 15.8869 1.5 13.5 1.5V1.5Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 4.5C8.71997 4.5 6.97991 5.02784 5.49987 6.01677C4.01983 7.00571 2.86628 8.41131 2.18509 10.0558C1.5039 11.7004 1.32567 13.51 1.67294 15.2558C2.0202 17.0016 2.87737 18.6053 4.13604 19.864C5.39472 21.1226 6.99836 21.9798 8.74419 22.3271C10.49 22.6743 12.2996 22.4961 13.9442 21.8149C15.5887 21.1337 16.9943 19.9802 17.9832 18.5001C18.9722 17.0201 19.5 15.28 19.5 13.5H10.5V4.5Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Analytics.propTypes = propTypes;
Analytics.defaultProps = defaultProps;

export default Analytics;
