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

const Messages = ({ size, color, ...props }) => {
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
        d="M11.25 18.75C10.8522 18.75 10.4706 18.592 10.1893 18.3107C9.90804 18.0294 9.75 17.6478 9.75 17.25V9.75C9.75 9.35218 9.90804 8.97064 10.1893 8.68934C10.4706 8.40804 10.8522 8.25 11.25 8.25H21.75C22.1478 8.25 22.5294 8.40804 22.8107 8.68934C23.092 8.97064 23.25 9.35218 23.25 9.75V17.25C23.25 17.6478 23.092 18.0294 22.8107 18.3107C22.5294 18.592 22.1478 18.75 21.75 18.75H20.25V23.25L15.75 18.75H11.25Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.75 12.75L3.75 15.75V11.25H2.25C1.85218 11.25 1.47064 11.092 1.18934 10.8107C0.908035 10.5294 0.75 10.1478 0.75 9.75V2.25C0.75 1.85218 0.908035 1.47064 1.18934 1.18934C1.47064 0.908035 1.85218 0.75 2.25 0.75H12.75C13.1478 0.75 13.5294 0.908035 13.8107 1.18934C14.092 1.47064 14.25 1.85218 14.25 2.25V5.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Messages.propTypes = propTypes;
Messages.defaultProps = defaultProps;

export default Messages;
