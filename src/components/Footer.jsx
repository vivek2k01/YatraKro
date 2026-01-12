import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-50 to-white border-t border-blue-100">

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-gray-700">

        {/* BRAND */}
        <div>
          <div className="flex items-center mb-4 ">
            <img
            src={logo}
            alt="YatraKro Logo"
            className="h-14 w-auto object-contain"
          />
          <h2 className="travel-heading text-2xl text-blue-700">
            YatraKro
          </h2>
          </div>
          <p className="text-sm leading-relaxed text-gray-600">
            Discover sacred journeys and beautiful destinations.
            Travel with trust, comfort and meaningful experiences.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="travel-heading text-lg text-blue-700 mb-4">
            Explore
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-700 transition cursor-pointer">Home</li>
            <li className="hover:text-blue-700 transition cursor-pointer">Trips</li>
            <li className="hover:text-blue-700 transition cursor-pointer">Bookings</li>
            <li className="hover:text-blue-700 transition cursor-pointer">About Us</li>
          </ul>
        </div>

        {/* DESTINATIONS */}
        <div>
          <h3 className="travel-heading text-lg text-blue-700 mb-4">
            Popular Destinations
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Kedarnath</li>
            <li>Varanasi</li>
            <li>Vrindavan</li>
            <li>Tirupati Balaji</li>
            <li>Manali</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="travel-heading text-lg text-blue-700 mb-4">
            Contact
          </h3>
          <p className="text-sm text-gray-600">📍 India</p>
          <p className="text-sm text-gray-600">📧 support@yatrakro.com</p>
          <p className="text-sm text-gray-600">📞 +91 XXXXX XXXXX</p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-blue-100 text-center py-4 text-xs sm:text-sm text-gray-500">
        © {new Date().getFullYear()} YatraKro • Travel with Faith & Comfort
      </div>

    </footer>
  );
};

export default Footer;
