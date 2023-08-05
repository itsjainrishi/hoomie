import { Card, CardBody } from '@/components/Card';

const PropertyCard = (props) => {
  const { imageUrl, name, price } = props;

  return (
    <Card className="shadow-house rounded-xl">
      <CardBody>
        <div>
          <div className="aspect-w-1 aspect-h-1">
            <img
              className="object-cover w-full h-full rounded-t-xl transition-all duration-300 group-hover:scale-125"
              src={imageUrl}
              alt=""
            />
          </div>
          <div className="p-4 xl:p-6">
            <h3 className="text-xs text-gray-900 sm:text-sm md:text-base xl:text-xl">
              <span href="#" title="">
                {name}
                <span className="absolute inset-0" aria-hidden="true"></span>
              </span>
            </h3>
            <div className="mt-2">
              <p className="text-xs font-semibold text-primary sm:text-sm md:text-base xl:text-lg">
                {price}
              </p>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default PropertyCard;