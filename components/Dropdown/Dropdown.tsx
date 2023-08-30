'use client'

import { useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts';
import { Icon } from '@/components/icons';
import DropdownItem from './DropdownItem';
import type { DropdownItemProps } from './DropdownItem';

type DropdownProps = {
  className?: string;
  items?: DropdownItemProps[];
  label?: string;
  value?: DropdownItemProps;
  onChange(arg: DropdownItemProps):void;
}

const Dropdown = ({ className, items, label, value, onChange }: DropdownProps) => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  }

  const closeDropdown = () => setIsActive(false);

  const handleSelect = (item: DropdownItemProps) => {
    onChange(item);
    closeDropdown();
  }

  useOnClickOutside(ref, closeDropdown);

  return (
    <div className={className} ref={ref}>
      <div className="dropdown w-full inline-block relative" >
        <button
          className="w-full py-2 px-4 rounded inline-flex items-center lg:min-w-[200px]"
          onClick={() => toggleDropdown()}
        >
          <div>
            <span className="text-sm xxl:text-xl font-semibold">
              {value?.label}
            </span>
            <div className="text-xs xxl:text-base text-left md:text-center">
              {label}
            </div>
          </div>
          <Icon name="DownArrow" className="w-6 h-6 ml-auto" />
        </button>
        <ul className={`dropdown-menu p-4 w-full bg-white shadow-box absolute rounded-2xl z-10 ${isActive ? '' : 'hidden'}`}>
          {items?.map(item => (
            <li key={item?.value} className="cursor-pointer text-left" onClick={() => handleSelect(item)}>
              <DropdownItem label={item?.label} value={item?.value} />
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default Dropdown;