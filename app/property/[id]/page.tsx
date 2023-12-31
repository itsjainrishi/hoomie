import dynamic from 'next/dynamic';
import Image from 'next/image';
import { gql } from '@apollo/client';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { getClient } from '@/lib/client';
import Images from './_components/images';

const Map = dynamic(() => import("@/components/map/map"), {
  ssr: false,
});

const PropertyQuery = gql`
  query Property($where: PropertyWhereUniqueInput!) {
    property(where: $where) {
      id
      propertyName
      rentPrice
      images {
        url
      }
      floorSpace
      petsAllowed
      numberOfBedrooms
      numberOfBathrooms
      numberOfGarages
      numberOfFloors
      city
      propertyType
      numberOfParkingSpaces
      description {
        raw
      }
      coordinate {
        latitude
        longitude
      }
      owner {
        name
        image {
          url
        }
      }
    }
  }
`

const Property = async({ params }: { params: { id: string } }) => {
  const data = await getClient().query({
    query: PropertyQuery,
    variables: { where: { id: params.id }}
  });
  const property = data.data.property;

  return (
    <div className="bg-[#fafcfb]">
      <div className="lg:pt-6">
        <nav className="hidden lg:block" aria-label="Breadcrumb">
          <ol role="list" className="container mx-auto flex items-center space-x-2 px-4">
            <li>
              <div className="flex items-center">
                <a href="#" className="mr-2 text-lg font-medium text-gray-900">
                  Hoomie
                </a>
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-6 w-5 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>

            <li className="text-lg">
              <a href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {property.propertyName}
              </a>
            </li>
          </ol>
        </nav>

        <div className="lg:container mx-auto lg:mt-6 grid grid-cols-2 lg:grid-cols-4 lg:gap-x-2 lg:h-96 lg:px-4">
          <Images images={property.images} propertyName={property.propertyName} />
        </div>

        <div className="lg:container mx-auto pb-16 pt-10 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-6 lg:pb-24 lg:pt-16 px-4">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              { property.propertyName }
            </h1>
            <div className="flex gap-6 mt-2">
              <div className="border border-primary text-primary px-4 py-2 rounded-xl leading-[18px]">
                {property.propertyType}
              </div>
              <div className="border border-primary text-primary px-4 py-2 rounded-xl leading-[18px]">
                {property.petsAllowed ? 'Pets not Allowed' : 'Pets now allowed'}
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-primary mt-4">
              £{ property.rentPrice }
            </h2>

            <div className="amneties mt-8">
              <div className="flex gap-6 overflow-auto hide-scroll-x">
                <div className="flex items-center gap-4 p-4 rounded-xl border border-gray bg-white min-w-max w-32">
                  <div className="leading-[18px]">
                    <span className="text-primary font-semibold">
                      {property.numberOfBedrooms}
                    </span> Bedrooms
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl border border-gray bg-white min-w-max w-32">
                  <div className="leading-[18px]">
                    <span className="text-primary font-semibold">
                      {property.numberOfBathrooms}
                    </span> Bathrooms
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl border border-gray bg-white min-w-max w-32">
                  <div className="leading-[18px]">
                    <span className="text-primary font-semibold">
                      {property.numberOfParkingSpaces}
                    </span> Parkings
                  </div>
                </div>
                {property.numberOfFloors &&
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-gray bg-white min-w-max w-32">
                    <div className="leading-[18px]">
                      <span className="text-primary font-semibold">
                        {property.numberOfFloors}
                      </span> Floors
                    </div>
                  </div>
                }
                {property.floorSpace &&
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-gray bg-white w-32">
                    <div className="leading-[18px]">
                      <span className="text-primary font-semibold">
                        {property.floorSpace}
                      </span> Sq.ft
                    </div>
                  </div>
                }
              </div>
            </div>
            <div className="description mt-8">
              <RichText
                content={property.description.raw}
                renderers={{
                  p: ({children}) => <p className="mt-10 leading-8 lg;text-lg">{children}</p>,
                  ul: ({children}) => {
                    return (
                      <div>
                        <h2 className="text-2xl font-semibold">About this place</h2>
                        <ul className="mt-4 lg:text-lg">{children}</ul>
                      </div>
                    )
                  },
                  li: ({children}) => <li className="py-0.5">{children}</li>
                }}
              ></RichText>
            </div>
          </div>

          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h3 className="text-xl font-semibold mb-4">Owner information</h3>
            <div className="property-owner p-6 bg-white border rounded-xl">
              <div className="flex gap-6">
                <div className="avatar">
                  <div
                    className={`relative w-40 h-40 flex items-center justify-center p-2 rounded-xl`}
                  >
                    <Image
                      alt="name"
                      className="rounded-xl"
                      src={property.owner.image.url}
                      style={{objectFit: "contain"}}  
                      fill
                      sizes="(max-width: 768px) 100vw"
                    />
                  </div>
                </div>
                <div className="owner-details py-4 flex flex-col gap-4 justify-between">
                  <p className="text-lg">{property.owner.name}</p>
                  <button className="border border-primary text-primary p-2 rounded-xl">
                    Contact
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4 lg:mt-8">
              <h3 className="text-xl font-semibold mb-4">Map View</h3>
              <div className="h-72">
                <Map markers={[
                  {
                    name: property.propertyName,
                    coordinate: [property.coordinate.latitude, property.coordinate.longitude],
                    rentPrice: property.rentPrice
                  }
                ]} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Property;