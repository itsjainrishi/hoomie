const Card = (props: any) => {
  const { as, className, children, ...otherProps } = props;
  const Component = as || "div";

  return (
    <Component className={`card ${className}`} {...otherProps}>
      {children}
    </Component>
  )
}

export default Card;