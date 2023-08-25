'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Dropdown } from '@/components/Dropdown';
import { Icon } from '@/components/icons';

const HeroSearch = () => {
  const router = useRouter();
  const cities = [
    {label: "Location (any)", value: "any"},
    {label: "London", value: "London"},
    {label: "Manchester", value: "Manchester"},
    {label: "Liverpool", value: "Liverpool"},
    {label: "Leicester", value: "Leicester"}
  ]

  const propertyTypes = [
    {label: "Property type (any)", value: "any"},
    {label: "House", value: "house"},
    {label: "Apartment", value: "apartment"}
  ]

  const priceRanges = [
    {label: "Price range (any)", value: "any"},
    {label: "Less than £1000", value: "0-1000"},
    {label: "Less than £2000", value: "0-2000"},
    {label: "Less than £3000", value: "0-3000"},
    {label: "Less than £4000", value: "0-4000"},
  ]

  const [city, setCity] = useState(cities[0]);
  const [propertyType, setPropertyType] = useState(propertyTypes[0]);
  const [priceRange, setPriceRange] = useState(priceRanges[0]);

  const showProperties = () => {
    console.log(city)
    console.log(propertyType)
    let cityChanged = false;
    let propertyTypeChanged = false;
    let priceRangeChanged = false;

    const lte = priceRange.value.split('-')[1];

    if (city.value !== 'any') cityChanged = true;
    if (propertyType.value !== 'any') propertyTypeChanged = true;
    if (priceRange.value !== 'any') priceRangeChanged = true;
    router.push(`/property?${ cityChanged ? 'city=' + city.value : '' } ${ propertyTypeChanged ? '&type=' + propertyType.value : '' } ${ priceRangeChanged ? '&rentPrice_lte=' + lte : ''  }`);
  }

  return (
    <div className="search p-2 lg:py-6 lg:px-6 rounded-3xl bg-white">
      <div className="flex flex-col md:flex-row items-center">
        <Dropdown
          className="w-full xl:w-[270px]"
          label="Select City"
          items={cities}
          value={city}
          onChange={setCity}
        />
        <Dropdown
          className="w-full xl:w-[270px]"
          label="Choose property type"
          items={propertyTypes}
          value={propertyType}
          onChange={setPropertyType}
        />
        <Dropdown
          className="w-full xl:w-[270px]"
          label="Choose price range"
          items={priceRanges}
          value={priceRange}
          onChange={setPriceRange}
        />
        <button
          className="flex items-center font-roboto mx-4 px-4 py-4 mt-4 lg:mt-0 rounded-3xl bg-primary text-white text-sm lg:text-base xxl:text-xl"
          onClick={showProperties}
        >
          <Icon className="w-4 h-4 fill-white" name="Search" />
          <span className="ml-2 md:ml-4">Search</span>
        </button>
      </div>
    </div>
  )
}

export default HeroSearch;