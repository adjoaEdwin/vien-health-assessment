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

const Listing = ({ size, color, ...props }) => {
  return (
    <svg
      fill="none"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M21.75 21.7612C21.75 22.1591 21.592 22.5406 21.3107 22.8219C21.0294 23.1032 20.6478 23.2612 20.25 23.2612H3.75C3.35218 23.2612 2.97064 23.1032 2.68934 22.8219C2.40804 22.5406 2.25 22.1591 2.25 21.7612V2.26123C2.25 1.86341 2.40804 1.48187 2.68934 1.20057C2.97064 0.919266 3.35218 0.76123 3.75 0.76123H14.379C14.7765 0.761315 15.1578 0.919212 15.439 1.20023L21.311 7.07223C21.592 7.35343 21.7499 7.73468 21.75 8.13223V21.7612Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.75 8.26123H15.75C15.3522 8.26123 14.9706 8.10319 14.6893 7.82189C14.408 7.54059 14.25 7.15906 14.25 6.76123V0.76123"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.669 9.61719L7.537 12.4592C7.4725 12.5451 7.39031 12.6161 7.29598 12.6675C7.20165 12.7188 7.09739 12.7494 6.99025 12.7569C6.88311 12.7645 6.77559 12.749 6.67496 12.7114C6.57434 12.6739 6.48296 12.6151 6.407 12.5392L5.25 11.3832"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.669 16.3672L7.537 19.2092C7.4725 19.2951 7.39031 19.3661 7.29598 19.4175C7.20165 19.4688 7.09739 19.4994 6.99025 19.5069C6.88311 19.5145 6.77559 19.499 6.67496 19.4614C6.57434 19.4239 6.48296 19.3651 6.407 19.2892L5.25 18.1322"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.75 12.7612H17.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.75 18.7612H17.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

Listing.propTypes = propTypes;
Listing.defaultProps = defaultProps;

export default Listing;
