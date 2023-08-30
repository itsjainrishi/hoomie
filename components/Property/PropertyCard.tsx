import Image from 'next/image';
import Link from 'next/link';
import { Card, CardBody } from '@/components/Card';
import type { Property } from './Property';

type PropertyCardProps = {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const { propertyName, images, rentPrice, id } = property;

  return (
    <Card className="shadow-house rounded-xl transition-all duration-300 lg:hover:scale-105 border">
      <CardBody>
        <div>
          <Link href={`/property/${id}`}>
            <div className="relative   aspect-w-1 aspect-h-1 h-60">
              <Image
                className="object-cover w-full h-full rounded-t-xl"
                src={images?.[0]?.url || ""}
                alt={propertyName}
                fill={true}
              />
            </div>
            <div className="p-4 xl:px-6 h-[140px]">
              <div className="flex flex-col justify-between h-full">
                <h3 className="text-gray-900 text-base xl:text-lg">
                  <span className="overflow-hidden">
                    {propertyName}
                  </span>
                </h3>
                <div className="mt-2">
                  <p className="font-semibold text-primary text-base">
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