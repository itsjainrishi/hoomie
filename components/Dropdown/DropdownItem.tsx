export type DropdownItemProps = {
  label?: string;
  value?: string;
};

const DropdownItem = ({ label, value }: DropdownItemProps) => {
  return (
    <span className="text-sm xxl:text-xl p-2 lg:py-4 lg:px-4 block whitespace-no-wrap">
      {label}
    </span>
  )
}

export default DropdownItem;