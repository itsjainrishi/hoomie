import { Card, CardBody } from '@/components/Card';

type StatCardProps = {
  bodyClassName?: string;
  className?: string;
  children?: React.ReactNode;
  hasShadow?: boolean;
  shadow?: string;
}

const StatCard = (props: StatCardProps) => {
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