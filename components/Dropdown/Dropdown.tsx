'use client'

import { useState } from 'react'
import { useClickAway } from "@uidotdev/usehooks";

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
            <span className="text-xl font-semibold">{selected.label}</span>
            <div className="">{label}</div>
          </div>
          <svg
            className="fill-current h-6 w-6 ml-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </button>
        <ul className={`dropdown-menu p-4 w-full bg-white shadow-box absolute rounded-2xl ${isActive ? '' : 'hidden'}`}>
          {data.map(item => (
            <li key={item.value} className="text-left" onClick={() => handleItemClick(item)}>
              <a className="text-xl py-4 px-4 block whitespace-no-wrap" href="#">
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