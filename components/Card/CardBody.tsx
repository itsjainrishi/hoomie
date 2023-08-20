const CardBody = (props: any) => {
  const { as, className = "", children, ...otherProps } = props;
  const Component = as || "div";

  return (
    <Component className={`card-body ${className}`} {...otherProps}>
      {children}
    </Component>
  )
}

export default CardBody;