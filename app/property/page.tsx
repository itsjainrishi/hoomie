'use client';
import L from 'leaflet';
import { useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import { gql, useSuspenseQuery } from '@apollo/client';
import { useIntersectionObserver } from 'usehooks-ts';
import { Icon } from '@/components/icons';
import { PropertyCard } from '@/components/Property';
import Filter from './filter';
import type { Property } from '@/components/Property';


const Map = dynamic(() => import("@/components/map/map"), {
  ssr: false,
});


type PropertyQueryResultProps = {
  data: {
    properties: Property[];
  }
}


const PropertiesQuery = gql`
  query Properties($where: PropertyWhereInput!) {
    properties(where: $where) {
      id
      propertyName
      rentPrice
      coordinate {
        latitude
        longitude
      }
      images(first: 1) {
        url
      }
    }
  }
`;

const PropertyListing = () => {
  const [mobile, setMobile] = useState(false);
  const searchParams = useSearchParams();

  const cityParam = searchParams.get('city');
  const typeParam = searchParams.get('type');
  const roomParam = searchParams.get('room');
  const bathParam = searchParams.get('bath');
  const lteParam = searchParams.get('rentPrice_lte');
  const gteParam = searchParams.get('rentPrice_gte');

  const filters = {
    ...cityParam && (cityParam !== 'any') && { city: cityParam },
    ...typeParam && (typeParam !== 'any') && { propertyType: typeParam },
    ...roomParam && (roomParam !== 'Any') && { numberOfBedrooms: Number(roomParam) },
    ...bathParam && (bathParam !== 'Any') && { numberOfBathrooms: Number(bathParam) },
    ...gteParam && { rentPrice_gte: Number(gteParam) },
    ...lteParam && { rentPrice_lte: Number(lteParam) },
  }

  const { data } : PropertyQueryResultProps = useSuspenseQuery(PropertiesQuery, {
    variables: { where: filters }
  });

  const markers = data?.properties?.map(p => {
    return {
      name: p.propertyName,
      coordinate: [p.coordinate.latitude, p.coordinate.longitude] as L.LatLngExpression,
      rentPrice: p.rentPrice
    }
  });

  const showFilters = () => {
    setMobile(!mobile);
    if (!mobile) {
      if (document.body.scrollHeight > window.innerHeight) {
        document.body.classList.add('modal-open')
      }
    } else {
      document.body.classList.remove('modal-open')
    }
  } 

  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return (
    <div className="bg-[#fafcfb]">
      <div className="properties container mx-auto pt-6 xl:pt-20 pb-10 px-4 lg:px-0">
        <div className="flex justify-end mb-2">
          <Icon name="Filter" className="w-6 h-6" onClick={showFilters} />
        </div>
        <div className="relative grid grid-cols-4 md:grid-cols-8 xl:grid-cols-12 gap-4 lg:gap-6">
          <div className="col-span-4 lg:col-span-3 xl:col-span-4">
            <div
              className={`hidden lg:flex flex-col overflow-y-auto hide-scroll-x p-6 cshadow max-w-sm xxl:max-w-lg ${isVisible ? 'absolute bottom-0' : data?.properties?.length !== 0 ? 'fixed top-28 xl:top-40' : 'absolute bottom-0'}`}
            >
              <Filter closeFilters={setMobile} isVisible={false} />
            </div>
          </div>
          <div className="col-span-4 lg:col-span-5 xl:col-span-8 min-h-[760px]">
            {data?.properties.length > 0 ? (
              <div className="grid lg:col-span-4 xl:grid-cols-8 gap-10">
                <div className="col-span-4 xl:col-span-8">
                  <Map className="h-96 rounded-lg z-10" markers={markers} />
                </div>
                {data?.properties?.map((property, index) => (
                  <div className="col-span-4" key={property.id}>
                    <PropertyCard property={property} />
                  </div>
                ))}
              </div>
            ) :
              <p className="pt-20 text-xl xl:text-2xl">No properties found</p>
            }
            <div ref={ref} className="end"></div>
          </div>
        </div>
        <div className={`mobile-nav fixed overflow-y-scroll h-screen w-full lg:hidden transition ease-in-out delay-150 p-4 bg-[#fafcfb] top-0 z-[60] ${mobile ? "left-0" : "-left-[100%]"}`}>
          <Filter closeFilters={setMobile} isVisible={mobile} />
        </div>
      </div>
    </div>
  )
}

export default PropertyListing;