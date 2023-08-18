'use client'

import { useState } from 'react'
import { useClickAway } from "@uidotdev/usehooks";
import { Icon } from '@/components/icons';

const Dropdown = ({ className, data, label }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(data[0]);

  const handleItemClick = item => {
    setSelected(item);
  }

  const toggleDropdown = () => {
    setIsActive(!isActive);
  }

  const ref = useClickAway(() => {
    setIsActive(false);
  })

  return (
    <div className={className} ref={ref}>
      <div className="dropdown w-full inline-block relative" >
        <button
          className="w-full py-2 px-4 rounded inline-flex items-center"
          onClick={() => toggleDropdown()}
        >
          <div>
            <span className="text-sm xxl:text-xl font-semibold">
              {selected.label}
            </span>
            <div className="text-xs lg:text-base text-left md:text-center">
              {label}
            </div>
          </div>
          <Icon name="DownArrow" size="24" />
        </button>
        <ul className={`dropdown-menu p-4 w-full bg-white shadow-box absolute rounded-2xl z-10 ${isActive ? '' : 'hidden'}`}>
          {data.map(item => (
            <li key={item.value} className="text-left" onClick={() => handleItemClick(item)}>
              <a className="text-sm xxl:text-xl p-2 lg:py-4 lg:px-4 block whitespace-no-wrap" href="#">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default Dropdown;