import React, { useState } from 'react'
import { Button } from '@blueprintjs/core'

const Sidebar = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('Projects')

  const handleMenuItemClick = (menu) => {
    setSelectedMenuItem(menu)
  };

  const menuItems = ['Progetti', 'Tasks', 'Calendar'];

  return (
    <div className="w-1/5 h-screen bg-gray-800 p-4">
      <ul className="text-white">
        {menuItems.map((item) => (
          <li
            key={item}
            className={`p-2 cursor-pointer ${selectedMenuItem === item ? 'bg-gray-600' : ''}`}
            onClick={() => handleMenuItemClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar