import { useState } from "react";
import logos from "../assets/logos.png";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // TEMP AUTH STATE (React-only)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* LEFT LOGO */}
         <div className="flex items-center h-full">
  <img
    src={logos}
    alt="YatraKro Logo"
    className="h-14 w-auto object-contain"
  />
  
</div>



          {/* DESKTOP MENU */}
          <div className="travel-heading hidden md:flex space-x-6 font-medium text-gray-700 items-center">
            <a href="/" className="text-black hover:text-blue-700 transition">
              Home
            </a>

            <a
              href="/trips"
              className="text-black hover:text-blue-700 transition"
            >
              Trips
            </a>
            <a
              href="/destinations"
              className="text-black hover:text-blue-700 transition"
            >
              Destinations
            </a>
            <a
              href="/about"
              className="text-black hover:text-blue-700 transition"
            >
              About Us
            </a>

            {/* 🔑 AUTH BASED UI */}
            {!isLoggedIn ? (
              <button
                onClick={() => setIsLoggedIn(true)}
                className="text-blue-700 font-semibold hover:underline"
              >
                Login / Signup
              </button>
            ) : (
              <button
                onClick={() => setIsLoggedIn(false)}
                className="text-blue-700 font-semibold hover:underline"
              >
                Account
              </button>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 rounded-lg border border-blue-700
               flex items-center justify-center text-blue-700"
            >
              ✈️
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
  <div className="md:hidden fixed inset-0 z-40">
    
    {/* BACKDROP (cinematic feel) */}
    <div
      className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      onClick={() => setMenuOpen(false)}
    ></div>

    {/* MENU PANEL */}
    <div className="absolute top-0 right-0 w-3/4 max-w-xs h-full
                    bg-white shadow-2xl
                    flex flex-col px-6 py-6 space-y-5
                    animate-slideIn">

      {/* BRAND / TRAVEL TAGLINE */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-blue-700 travel-heading">
          YatraKro
        </h2>
        <p className="text-xs text-gray-500">
          Begin your journey ✨
        </p>
      </div>

      {/* LINKS */}
      <a
        href="/"
        onClick={() => setMenuOpen(false)}
        className="text-gray-800 text-lg font-medium hover:text-blue-700 transition"
      >
        🏠 Home
      </a>

      <a
        href="/trips"
        onClick={() => setMenuOpen(false)}
        className="text-gray-800 text-lg font-medium hover:text-blue-700 transition"
      >
        🧳 Trips
      </a>

      <a
        href="/destinations"
        onClick={() => setMenuOpen(false)}
        className="text-gray-800 text-lg font-medium hover:text-blue-700 transition"
      >
        🌍 Destinations
      </a>

      <a
        href="/about"
        onClick={() => setMenuOpen(false)}
        className="text-gray-800 text-lg font-medium hover:text-blue-700 transition"
      >
        🏔️ About Us
      </a>

      <div className="border-t pt-4 mt-4"></div>

      {/* AUTH */}
      {!isLoggedIn ? (
        <button
          onClick={() => {
            setIsLoggedIn(true);
            setMenuOpen(false);
          }}
          className="text-blue-700 font-semibold text-left text-lg"
        >
          🔐 Login / Signup
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedIn(false);
            setMenuOpen(false);
          }}
          className="text-blue-700 font-semibold text-left text-lg"
        >
          👤 Account
        </button>
      )}
    </div>
  </div>
)}

    </nav>
  );
};

export default Navbar;
