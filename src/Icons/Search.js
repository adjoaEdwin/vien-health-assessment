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
  color: "green",
};

const Search = ({ size, color, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.5"
        d="M14.2928 16.7071C13.9022 16.3166 13.9022 15.6834 14.2928 15.2929C14.6833 14.9024 15.3165 14.9024 15.707 15.2929L19.707 19.2929C20.0975 19.6834 20.0975 20.3166 19.707 20.7071C19.3165 21.0976 18.6833 21.0976 18.2928 20.7071L14.2928 16.7071Z"
        fill="#FDFDFD"
      />
      <path
        d="M11.0001 16C13.7615 16 16.0001 13.7614 16.0001 11C16.0001 8.23858 13.7615 6 11.0001 6C8.2387 6 6.00012 8.23858 6.00012 11C6.00012 13.7614 8.2387 16 11.0001 16ZM11.0001 18C7.13413 18 4.00012 14.866 4.00012 11C4.00012 7.13401 7.13413 4 11.0001 4C14.8661 4 18.0001 7.13401 18.0001 11C18.0001 14.866 14.8661 18 11.0001 18Z"
        fill="#FDFDFD"
      />
    </svg>
  );
};

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default Search;
