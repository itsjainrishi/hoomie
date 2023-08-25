type PriceInputProps = {
  label?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PriceInput = ({ label, placeholder, value, onChange }) => {
  return (
    <div>
      <label className="block text-sm lg:text-base font-medium leading-6 text-tertiary">
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-secondary sm:text-sm xxl:text-lg">£</span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          className="bg-theta block w-full text-base xxl:text-lg rounded-md border-0 py-1.5 pl-7 pr-7 text-gray-900 placeholder:text-gray-400"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label className="sr-only">Currency</label>
        </div>
      </div>
    </div>
  )
}

export default PriceInput;