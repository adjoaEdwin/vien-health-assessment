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

const SavedSearch = ({ size, color, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.5 20.75C18.3995 20.75 20.75 18.3995 20.75 15.5C20.75 12.6005 18.3995 10.25 15.5 10.25C12.6005 10.25 10.25 12.6005 10.25 15.5C10.25 18.3995 12.6005 20.75 15.5 20.75Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.0001 22.9984L19.2361 19.2344"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.75 20H5.75C5.35218 20 4.97064 19.842 4.68934 19.5607C4.40804 19.2794 4.25 18.8978 4.25 18.5V11"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.25 9.5L11 1.25L20.75 9.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.25 2H19.25V5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

SavedSearch.propTypes = propTypes;
SavedSearch.defaultProps = defaultProps;

export default SavedSearch;
