"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HeaderItem } from '../../../../types/menu';
import { usePathname } from 'next/navigation';

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // track scroll
  const path = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (item.submenu) setSubmenuOpen(true);
  };
  const handleMouseLeave = () => setSubmenuOpen(false);

  const isActive = () => {
    if (item.href === path) return true;
    if (item.href === "/blog" && path.startsWith("/blog")) return true;
    if (item.href === "/portfolio" && path.startsWith("/portfolio")) return true;
    return false;
  };

  // Determine link color based on scroll
  const linkColor = isActive()
    ? scrolled
      ? "text-red-600 dark:text-red-400" // active after scroll
      : "text-black"                     // active at top
    : scrolled
      ? "text-black hover:text-red-600 dark:hover:text-red-400" // inactive after scroll
      : "text-black hover:text-red-300";                        // inactive at top

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={item.href}
        className={`text-base flex items-center py-2 font-medium transition-colors duration-300 ${linkColor}`}
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
            className="ml-1"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </Link>

      {submenuOpen && (
        <div
          className="absolute py-2 left-0 mt-0.5 top-8 w-60 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-50"
        >
          {item.submenu?.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className={`block px-4 py-2 text-[15px] transition-colors duration-300 rounded-md ${
                path === subItem.href
                  ? "bg-red-600 text-white" // active submenu
                  : "text-black hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-red-600 dark:hover:text-red-400"
              }`}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderLink;
