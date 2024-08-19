import React, { useState } from 'react';
import useWindowWidth from './useWindowWidth';

const HamburgerMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const windowWidth = useWindowWidth();
    const isMobile = windowWidth < 768; // Adjust this value if needed

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    if (!isMobile) {
        return null; // Don't render the menu on larger screens
    }

    return (
        <nav className="sticky top-0 z-50 ">
            {/* Hamburger Icon */}
            <button 
                className="lg:hidden flex items-center p-3 text-gray-700 dark:text-gray-200 bg-[#1a1a1a]"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <svg 
                    className="w-6 h-6"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M4 6h16M4 12h16m-7 6h7" 
                    />
                </svg>
            </button>

            {/* Menu Items */}
            <div 
                className={`absolute top-0 left-0 mt-12 w-48 bg-[#1a1a1a] shadow-lg rounded-lg ${isOpen ? 'block' : 'hidden'} z-50`}
            >
                <ul className="space-y-2 p-4">
                    <li><a href="/" className="text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 block">Profile</a></li>
                    <li><a href="/skills" className="text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 block">Skills</a></li>
                    <li><a href="/projects" className="text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 block">Projects</a></li>
                    <li><a href="/contact" className="text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 block">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default HamburgerMenu;
