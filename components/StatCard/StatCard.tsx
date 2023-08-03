import { Card, CardBody } from '@/components/Card';

const StatCard = (props) => {
  const {
    bodyClassName,
    className,
    children,
    hasShadow = true,
    shadow = "card__shadow",
    ...otherProps
  } = props;

  return (
    <Card className={`${className} ${hasShadow ? shadow : ''}`} {...otherProps}>
      <CardBody className={bodyClassName}>
        {children}
      </CardBody>
    </Card>
  )
}

export default StatCard;