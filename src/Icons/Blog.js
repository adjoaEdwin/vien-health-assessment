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

const Blog = ({ size, color, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M22.627 14.8698L15 22.4998L11.25 23.2498L12 19.4998L19.631 11.8698C19.8273 11.6732 20.0604 11.5172 20.317 11.4107C20.5736 11.3043 20.8487 11.2495 21.1265 11.2495C21.4043 11.2495 21.6794 11.3043 21.936 11.4107C22.1926 11.5172 22.4257 11.6732 22.622 11.8698L22.631 11.8778C23.0272 12.2751 23.2493 12.8135 23.2485 13.3746C23.2478 13.9357 23.0242 14.4735 22.627 14.8698Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.24597 20.25H2.24597C1.84815 20.25 1.46662 20.092 1.18531 19.8107C0.904007 19.5294 0.745972 19.1478 0.745972 18.75V2.25C0.745972 1.85218 0.904007 1.47064 1.18531 1.18934C1.46662 0.908035 1.84815 0.75 2.24597 0.75H17.246C17.6438 0.75 18.0253 0.908035 18.3066 1.18934C18.5879 1.47064 18.746 1.85218 18.746 2.25V9"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.24597 5.25H14.246"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.24597 9.75H14.246"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.24597 14.25H12.746"
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

Blog.propTypes = propTypes;
Blog.defaultProps = defaultProps;

export default Blog;
