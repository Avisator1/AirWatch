import { useState } from "react";
import logo from '../../assets/Logo/icon.svg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="right-0 z-50 recursive bg-[#65372a] shadow">
      <nav className="flex items-center justify-between px-4 py-3 max-w-[85rem] mx-auto">
        <a href="/" className="text-xl font-bold">
          <div className="inline-flex items-center text-[#c8a789] gap-2">
            <img src={logo} className="h-9 w-9" alt="logo" />
            AirWatch
          </div>
        </a>

        <div className="hidden md:flex items-center space-x-8">
        <a href="/" className="text-[#c8a789] transition-colors">Home</a>
          <a href="/credits" className="text-[#c8a789] transition-colors">Credits</a>
          <a href="#faq" className="text-[#c8a789] transition-colors">FAQ</a>
          <a href="/gases" className="text-[#c8a789] transition-colors">Gases</a>
          <a href="#map" className="text-[#c8a789] transition-colors">Map</a>
        </div>

        <div className="hidden md:block">
          <a
            href="#map"
            className="px-6 py-3 text-white bg-[#ffb54c] rounded-xl hover:bg-indigo-700 transition-colors"
          >
            View Map
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-600 hover:text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/" className="block px-3 py-2 text-[#c8a789] hover:bg-gray-100 rounded">Home</a>
            <a href="#faq" className="block px-3 py-2 text-[#c8a789] hover:bg-gray-100 rounded">FAQ</a>
            <a href="#map" className="block px-3 py-2 text-[#c8a789] hover:bg-gray-100 rounded">Map</a>
            <a href="/credits" className="block px-3 py-2 text-[#c8a789] hover:bg-gray-100 rounded">Credits</a>
          </div>
          <div className="px-2 pt-4 pb-3 border-t border-gray-200">
            <a
              href="#map"
              className="block w-full px-3 py-2 text-center text-white bg-[#ffb54c] rounded transition-colors"
            >
              View Maps
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
