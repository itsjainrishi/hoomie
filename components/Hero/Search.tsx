import { Dropdown } from '@/components/Dropdown';
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
    <div className="search p-2 lg:py-6 lg:px-6 rounded-3xl bg-white">
      <div className="flex flex-col md:flex-row items-center">
        <Dropdown className="w-full xl:w-[270px]" label="Select City" items={cities} />
        <Dropdown className="w-full xl:w-[270px]" label="Choose property type" items={propertyTypes} />
        <Dropdown className="w-full xl:w-[270px]" label="Choose price range" items={priceRanges} />
        <button className="flex items-center font-roboto mx-4 px-4 py-4 mt-4 lg:mt-0 rounded-3xl bg-primary text-white text-sm lg:text-base xxl:text-xl">
          <Icon fill="#ffffff" name="Search" />
          <span className="ml-2 md:ml-4">Search</span>
        </button>
      </div>
    </div>
  )
}

export default HeroSearch;