import React, { useState } from "react";
import homeIcon from "../assets/home-icon-main.svg"
import boxIcon from "../assets/box-icon.svg"
import addSqaure from "../assets/add-square-icon.svg"
import userIcon from "../assets/user-icon.svg"
import settingsIcon from "../assets/settings-icon.svg"
import graphIcon from "../assets/graph-icon.svg"
import tagIcon from "../assets/tag-icon.svg"
import storeIcon from "../assets/store-icon.svg"
import cartIcon from "../assets/cart-icon.svg"
import arrowLeft from "../assets/arrow-left.svg"
import arrowRight from "../assets/arrow-right.svg"

const sidebarItems = [
  {
    name: "Home",
    icon: homeIcon,
    href: "#",
  },
  {
    name: "Orders",
    icon: boxIcon,
    children: [
      { name: "All Orders", href: "#" },
      { name: "Pending", href: "#" },
      { name: "Completed", href: "#" },
    ],
  },
  {
    name: "Products",
    icon: tagIcon,
    children: [
      { name: "All Products", href: "#" },
      { name: "Categories", href: "#" },
      { name: "Inventory", href: "#" },
    ],
  },
  {
    name: "Customers",
    icon: userIcon,
    children: [
      { name: "All Customers", href: "#" },
      { name: "Segments", href: "#" },
      { name: "Reviews", href: "#" },
    ],
  },
  {
    name: "Analytics",
    icon: graphIcon,
    href: "#",
  },

  {
    name: "Online Store",
    icon: storeIcon,
    href: "#",
  },
  {
    name: "Shop",
    icon: cartIcon,
    href: "#",
  },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full sm:bg-iceberg/10 bg-gray-100 border-r border-gray-200  transition-all duration-300 ease-in-out
        ${isOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full lg:translate-x-0 lg:w-20'}
      `}>


        <div className="flex items-center relative justify-between gap-3 p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
          <div  className="text-xl rounded-lg px-3 py-1 bg-aztecPurple text-white font-bold">S</div>
          <h1 className={`font-bold text-xl text-gray-800 transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0 '
          }`}>
            ShopZen
          </h1>
          </div>

          <button
            onClick={toggleSidebar}
            className={`p-1 rounded-md border bg-white transition-all duration-200
              ${isOpen ? "hover:bg-gray-100 border-gray-100" : "absolute -right-3"}
            `}
          >
            <img
              src={arrowLeft}
              alt="arrow"
              className={`w-4 h-4 transition-transform duration-100
                ${isOpen ? "" : "rotate-180"}
              `}
            />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6">
          <ul className="space-y-2 px-3">
            {sidebarItems.map((item, idx) =>
              item.isLabel ? (
                <li key={idx} className="ml-3 font-semibold tracking-wide text-gray-700 pt-4">
                  {item.name}
                </li>
              ) : (
                <li key={idx}>
                  <div>
                    <a
                      href={item.href || "#"}
                      className={`flex items-center px-3 py-2 text-gray-700 rounded-lg transition-colors duration-200 group relative
                        ${openDropdown === item.name && isOpen ? 'bg-gradient-to-b from-gray-50/10 to-gray-100 text-aztecPurple font-semibold tracking-wider' : 'hover:bg-gray-100'}
                      `}
                      onClick={item.children ? (e) => { e.preventDefault(); handleDropdown(item.name); } : undefined}
                    >
                      <img src={item.icon} alt={item.name} className="w-5 h-5" />
                      <span className={`ml-3 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>
                        {item.name}
                      </span>
                      {item.children && isOpen && (
                        <img
                          src={arrowLeft}
                          alt="dropdown"
                          className={`w-4 h-4 ml-auto transition-transform duration-200 ${openDropdown === item.name ? "rotate-[-90deg]" : "rotate-0"}`}
                          style={{ transform: openDropdown === item.name ? "rotate(-90deg)" : "rotate(0deg)" }}
                        />
                      )}
                    </a>
                    {/* Dropdown */}
                    {item.children && openDropdown === item.name && isOpen && (
                      <ul className={`ml-10 mt-1 space-y-1`}>
                        {item.children.map((child, cidx) => (
                          <li key={cidx}>
                            <a
                              href={child.href}
                              className="block px-2 py-1 text-gray-600 rounded hover:bg-gray-100"
                            >
                              {child.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
        <a href="#" className="flex items-center px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200 group relative">
                <img src={settingsIcon} alt="Home" className="w-5 h-5" />
                <span className={`ml-3 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 '}`}>
                 Settings
                </span>
                {/* Custom badge or tooltip here if needed */}
              </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar; 