import PropTypes from "prop-types";

/**
 * props definition
 */
const propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

const defaultProps = {
  size: 16,
  color: "var(--black-40)",
};

const MoreHoriz = ({ size, color, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99997 9.5999C8.88362 9.5999 9.59997 8.88356 9.59997 7.9999C9.59997 7.11625 8.88362 6.3999 7.99997 6.3999C7.11631 6.3999 6.39997 7.11625 6.39997 7.9999C6.39997 8.88356 7.11631 9.5999 7.99997 9.5999ZM1.6 9.59993C2.48366 9.59993 3.2 8.88358 3.2 7.99993C3.2 7.11627 2.48366 6.39993 1.6 6.39993C0.716344 6.39993 0 7.11627 0 7.99993C0 8.88358 0.716344 9.59993 1.6 9.59993ZM16 7.9999C16 8.88356 15.2836 9.5999 14.4 9.5999C13.5163 9.5999 12.8 8.88356 12.8 7.9999C12.8 7.11625 13.5163 6.3999 14.4 6.3999C15.2836 6.3999 16 7.11625 16 7.9999Z"
        fill="white"
        fillOpacity="0.01"
      />
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="6"
        width="16"
        height="4"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.99997 9.5999C8.88362 9.5999 9.59997 8.88356 9.59997 7.9999C9.59997 7.11625 8.88362 6.3999 7.99997 6.3999C7.11631 6.3999 6.39997 7.11625 6.39997 7.9999C6.39997 8.88356 7.11631 9.5999 7.99997 9.5999ZM1.6 9.59993C2.48366 9.59993 3.2 8.88358 3.2 7.99993C3.2 7.11627 2.48366 6.39993 1.6 6.39993C0.716344 6.39993 0 7.11627 0 7.99993C0 8.88358 0.716344 9.59993 1.6 9.59993ZM16 7.9999C16 8.88356 15.2836 9.5999 14.4 9.5999C13.5163 9.5999 12.8 8.88356 12.8 7.9999C12.8 7.11625 13.5163 6.3999 14.4 6.3999C15.2836 6.3999 16 7.11625 16 7.9999Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0)">
        <rect
          x="-0.800659"
          y="-0.800781"
          width="17.6"
          height="17.6"
          fill={color}
        />
      </g>
    </svg>
  );
};

MoreHoriz.propTypes = propTypes;
MoreHoriz.defaultProps = defaultProps;

export default MoreHoriz;
