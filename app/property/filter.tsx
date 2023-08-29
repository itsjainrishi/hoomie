import { useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Dropdown } from '@/components/Dropdown';
import { PriceInput } from '@/components/PriceInput';
import type { DropdownItemProps } from '@/components/Dropdown';

const propertyTypes = [
  {label: "Any", value: "any"},
  {label: "House", value: "House"},
  {label: "Apartment", value: "Apartment"}
];

const cities = [
  {label: "Any", value: "any"},
  {label: "London", value: "London"},
  {label: "Manchester", value: "Manchester"},
  {label: "Liverpool", value: "Liverpool"},
  {label: "Leicester", value: "Leicester"}
];

const bathrooms = ['Any', '1', '2', '3', '4', '5+'];
const bedrooms = ['Any', '1', '2', '3', '4', '5+'];

type FilterProps = {
  closeFilters: (val:boolean) => void;
  isVisible: boolean;
}


const Filter = ({ closeFilters, isVisible }: FilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const cityParam = searchParams.get('city');
  const typeParam = searchParams.get('type');
  const roomParam = searchParams.get('room');
  const bathParam = searchParams.get('bath');
  const lteParam = searchParams.get('rentPrice_lte');
  const gteParam = searchParams.get('rentPrice_gte');


  const [roomCount, setRoomCount] = useState(roomParam ? roomParam : bedrooms[0]);
  const [bathRoomCount, setBathRoomCount] = useState(bathParam ? bathParam : bathrooms[0]);
  const [city, setCity] = useState<DropdownItemProps>(cityParam ? {label: cityParam.charAt(0).toUpperCase() + cityParam.slice(1), value: cityParam} : cities[0]);
  const [propertyType, setPropertyType] = useState<DropdownItemProps>(typeParam ? {label: typeParam.charAt(0).toUpperCase() + typeParam.slice(1), value: typeParam} : propertyTypes[0]);
  const [lte, setLTE] = useState(lteParam ? lteParam : "");
  const [gte, setGTE] = useState(gteParam ? gteParam : "");

  const intervalRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const timeoutId = intervalRef.current;
    return () => clearTimeout(timeoutId);
  },[]);


  const updateSearch = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    router.replace(`/property?${params}`);
  }

  const handlePropertyType = (ptype: { label: string, value: string }) => {
    setPropertyType(ptype);
    updateSearch('type', ptype.value);
  }

  const handleCity = (city: { label: string, value: string }) => {
    setCity(city);
    updateSearch('city', city.value);
  }

  const handleRoomCount = (val: string) => {
    setRoomCount(val);
    updateSearch('room', val);
  }

  const handleBathRoomCount = (val: string) => {
    setBathRoomCount(val);
    updateSearch('bath', val);
  }

  const handleMinPrice = (val: string) => {
    setGTE(val);
    clearTimeout(intervalRef.current);
    const id = setTimeout(() => {
      updateSearch('rentPrice_gte', val);
    }, 500);
    intervalRef.current = id;
  }

  const handleMaxPrice = (val: string) => {
    setLTE(val);
    clearTimeout(intervalRef.current);
    const id = setTimeout(() => {
      updateSearch('rentPrice_lte', val);
    }, 500);
    intervalRef.current = id;
  }

  const handleClose = () => {
    closeFilters(false);
    document.body.classList.remove('modal-open');
  }

  return (
    <>
      <div className="flex items-center justify-between gap-6 w-full">
        <h2 className="text-base lg:text-lg xxl:text-2xl font-semibold leading-6">
          Filters
        </h2>
      </div>
      <div className="relative mt-6 flex-1 px-4 sm:px-6 pb-24">
        <h4 className="font-semibold xxl:text-xl">Price range</h4>
        <div className="flex gap-4 mt-4">
          <div className="w-1/2">
            <PriceInput
              label="Min Price"
              placeholder="0.00"
              value={gte}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleMinPrice(e.target.value)}
            />
          </div>
          <div className="w-1/2">
            <PriceInput
              label="Max Price"
              placeholder="50000.00"
              value={lte}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleMaxPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="border-b border-beta my-6"></div>
        <h4 className="font-semibold xxl:text-xl">Property Type</h4>
        <div className="flex gap-4 mt-4">
          <Dropdown
            className="w-full bg-white rounded-xl"
            items={propertyTypes}
            value={propertyType}
            onChange={(val: { label: string, value: string }) => handlePropertyType(val)}
          />
        </div>
        <div className="border-b border-beta my-6"></div>
        <h4 className="font-semibold xxl:text-xl">City</h4>
        <div className="flex gap-4 mt-4">
          <Dropdown
            className="w-full bg-white rounded-xl"
            items={cities}
            value={city}
            onChange={(val: { label: string, value: string }) => handleCity(val)}
          />
        </div>
        <div className="border-b border-beta my-6"></div>
        <h4 className="font-semibold xxl:text-xl">Beds and baths</h4>
        <h5 className="mt-4 xxl:text-lg">Beds</h5>
        <div className="flex gap-4 mt-4 overflow-x-scroll hide-scroll-x"> 
          {bedrooms.map((room, index) => (
            <div
              key={index}
              className={`cursor-pointer min-w-[40px] lg:min-w-[48px] w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full border ${roomCount === room ? 'text-white bg-primary' : 'bg-white border-beta'}`}
              onClick={() => handleRoomCount(room)}
            >
              <p className="text-sm lg:text-base grow text-center">{room}</p>
            </div>
            
          ))}
        </div>
        <h5 className="mt-8 xxl:text-lg">Bathrooms</h5>
        <div className="flex gap-4 mt-4 overflow-x-scroll hide-scroll-x"> 
          {bathrooms.map((bathroom, index) => (
            <div
              key={index}
              className={`cursor-pointer min-w-[40px] lg:min-w-[48px] w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full border ${bathRoomCount === bathroom ? 'text-white bg-primary' : 'bg-white border-beta'}`}
              onClick={() => handleBathRoomCount(bathroom)}
            >
              <p className="text-sm lg:text-base grow text-center">{bathroom}</p>
            </div>
            
          ))}
        </div>
      </div>
      <div className={`filter-actions py-4 lg:hidden gap-6 w-full justify-center fixed bottom-0 bg-white left-0 ${ isVisible ? 'flex' : 'hidden' }`}>
        <button
          className="p-2 text-primary border border-primary rounded-xl w-40"
          type="button"
          onClick={handleClose}
        >
          Reset Filters
        </button>
        <button
          className="bg-primary border border-primary p-2 rounded-xl text-white w-40"
          type="button"
          onClick={handleClose}
        >
          See Results
        </button>
      </div>
    </>
  )
}

export default Filter;