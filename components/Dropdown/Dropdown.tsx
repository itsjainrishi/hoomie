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
}

const Dropdown = ({ className, items, label }: DropdownProps) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(items?.[0]);
  const ref = useRef(null);

  const handleItemClick = (item: DropdownItemProps) => {
    setSelected(item);
  }

  const toggleDropdown = () => {
    setIsActive(!isActive);
  }

  const closeDropdown = () => setIsActive(false);

  useOnClickOutside(ref, closeDropdown);

  return (
    <div className={className} ref={ref}>
      <div className="dropdown w-full inline-block relative" >
        <button
          className="w-full py-2 px-4 rounded inline-flex items-center"
          onClick={() => toggleDropdown()}
        >
          <div>
            <span className="text-sm xxl:text-xl font-semibold">
              {selected?.label}
            </span>
            <div className="text-xs lg:text-base text-left md:text-center">
              {label}
            </div>
          </div>
          <Icon name="DownArrow" className="w-6 h-6 ml-auto" />
        </button>
        <ul className={`dropdown-menu p-4 w-full bg-white shadow-box absolute rounded-2xl z-10 ${isActive ? '' : 'hidden'}`}>
          {items?.map(item => (
            <li key={item?.value} className="text-left" onClick={() => handleItemClick(item)}>
              <DropdownItem label={item?.label} value={item?.value} />
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default Dropdown;