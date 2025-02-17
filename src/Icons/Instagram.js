import PropTypes from "prop-types";

/**
 * props definition
 */
const propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

const defaultProps = {
  size: 18,
  color: "var(--green)",
};

const Instagram = ({ size, color, ...props }) => {
  return (
    <svg
      fill="none"
      width={size}
      height={size}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M12.75 1.5H5.25C3.17893 1.5 1.5 3.17893 1.5 5.25V12.75C1.5 14.8211 3.17893 16.5 5.25 16.5H12.75C14.8211 16.5 16.5 14.8211 16.5 12.75V5.25C16.5 3.17893 14.8211 1.5 12.75 1.5Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 8.5287C12.0926 9.15289 11.986 9.79037 11.6953 10.3505C11.4047 10.9106 10.9449 11.3648 10.3812 11.6485C9.8176 11.9322 9.17886 12.0309 8.55586 11.9307C7.93287 11.8304 7.35735 11.5363 6.91115 11.0901C6.46496 10.6439 6.17082 10.0684 6.07058 9.44536C5.97033 8.82237 6.06907 8.18362 6.35277 7.61998C6.63647 7.05634 7.09066 6.59651 7.65076 6.30588C8.21086 6.01526 8.84834 5.90864 9.47253 6.0012C10.1092 6.09562 10.6987 6.3923 11.1538 6.84743C11.6089 7.30257 11.9056 7.89201 12 8.5287Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <ellipse cx="13.125" cy="4.875" rx="1.125" ry="1.125" fill={color} />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="18" height="18" fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

Instagram.propTypes = propTypes;
Instagram.defaultProps = defaultProps;

export default Instagram;
