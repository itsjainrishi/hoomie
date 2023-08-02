import Dropdown from '@/components/Dropdown/Dropdown';
import { Icon } from '@/components/icons';

const HeroSearch = () => {
  const cities = [
    {label: "Location (any)", value: "any"},
    {label: "London", value: "london"},
    {label: "Manchester", value: "manchester"},
    {label: "Liverpool", value: "liverpool"},
    {label: "Leicester", value: "leicester"}
  ]

  const propertyTypes = [
    {label: "Property type (any)", value: "any"},
    {label: "House", value: "house"},
    {label: "Apartment", value: "apartment"}
  ]

  const priceRanges = [
    {label: "Price range (any)", value: "any"},
    {label: "0-1000", value: "0-1000"},
    {label: "1000-2000", value: "1000-2000"},
    {label: "2000-3000", value: "2000-3000"},
    {label: "3000-4000", value: "3000-4000"},
  ]

  return (
    <div className="search py-6 px-6 rounded-3xl bg-white">
      <div className="flex items-center">
        <Dropdown className="xl:w-[270px]" label="Select City" data={cities} />
        <Dropdown className="xl:w-[270px]" label="Choose property type " data={propertyTypes} />
        <Dropdown className="xl:w-[270px]" label="Choose price range" data={priceRanges} />
        <button className="flex items-center font-roboto mx-4 px-4 py-4 rounded-3xl bg-[#f7976b] text-white text-xl">
          <Icon fill="#ffffff" name="Search" />
          <span className="ml-4">Search</span>
        </button>
      </div>
    </div>
  )
}

export default HeroSearch;