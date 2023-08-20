const CardFooter = (props: any) => {
  const { as, className, children, ...otherProps } = props;
  const Component = as || "div";

  return (
    <Component className={`card-footer ${className}`} {...otherProps}>
      {children}
    </Component>
  )
}

export default CardFooter;