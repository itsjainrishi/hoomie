const CardHeader = (props: any) => {
  const { as, className, children, ...otherProps } = props;
  const Component = as || "div";

  return (
    <Component className={`card-header ${className}`} {...otherProps}>
      {children}
    </Component>
  )
}

export default CardHeader;