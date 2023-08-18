const IconDownArrow = ({ fill, size = '1em', ...otherProps }) => (
  <svg
    className="ml-auto"
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    height={size}
    width={size}
    viewBox="0 0 20 20"
    {...otherProps}
  >
    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
  </svg>
)

export default IconDownArrow;