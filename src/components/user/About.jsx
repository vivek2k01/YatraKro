import mission from "../../assets/mission2.jpg";
import whoweare from "../../assets/whoweare.jpg";

const About = () => {
  return (
    <div className="min-h-screen px-6 py-20 bg-gradient-to-b from-sky-100 via-white to-blue-50">
      {/* PAGE HEADER */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
          About YatraKro
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Your trusted platform for spiritual and travel journeys across India.
        </p>
      </div>

      {/* CONTENT WRAPPER */}
      <div className="max-w-6xl mx-auto space-y-14">
        {/* WHO WE ARE */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center
                        bg-white p-6 md:p-8 rounded-xl shadow"
        >
          <img
            src={whoweare}
            alt="Who We Are"
            className="w-full h-64 object-cover rounded-xl"
          />

          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed">
              YatraKro is a travel-focused platform designed to connect
              travelers with trusted tour and travel partners. Whether you are
              planning a spiritual yatra or an adventure trip, we make trip
              discovery and booking simple, transparent, and reliable.
            </p>
          </div>
        </div>

        {/* OUR MISSION */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center
                        bg-white p-6 md:p-8 rounded-xl shadow"
        >
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to simplify travel planning for everyone by
              bringing verified trips, clear pricing, and trusted partners onto
              one platform. We aim to make every journey stress-free and
              memorable.
            </p>
          </div>

          <img
            src={mission}
            alt="Our Mission"
            className="w-full h-64 object-cover rounded-xl order-1 md:order-2"
          />
        </div>

        {/* VALUES */}
        <div>
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-10">
            Why Choose YatraKro?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">
                Trusted Partners
              </h3>
              <p className="text-gray-600 text-sm">
                Work only with verified and experienced tour operators.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">
                Transparent Pricing
              </h3>
              <p className="text-gray-600 text-sm">
                No hidden charges. Clear and honest trip pricing.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">
                Easy Booking
              </h3>
              <p className="text-gray-600 text-sm">
                Simple and fast booking experience for all travelers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
