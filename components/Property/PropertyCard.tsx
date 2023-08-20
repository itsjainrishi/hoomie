import Link from 'next/link';
import { Card, CardBody } from '@/components/Card';
import type { Property } from './Property';

type PropertyCardProps = {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const { propertyName, images, rentPrice, id } = property;

  return (
    <Card className="shadow-house rounded-xl">
      <CardBody>
        <div>
          <Link href={`/property/${id}`}>
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="object-cover w-full h-full rounded-t-xl transition-all duration-300 group-hover:scale-125"
                src={images?.[0]?.url}
                alt=""
              />
            </div>
            <div className="p-4 xl:px-6 h-[140px]">
              <div className="flex flex-col justify-between h-full">
                <h3 className="text-gray-900 text-base xl:text-xl">
                  <span className="overflow-hidden tex">
                    {propertyName}
                  </span>
                </h3>
                <div className="mt-2">
                  <p className="font-semibold text-primary text-base xl:text-lg">
                    £{rentPrice}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </CardBody>
    </Card>
  )
}

export default PropertyCard;