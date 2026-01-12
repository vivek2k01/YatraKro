import { useParams } from "react-router-dom";
import { useState } from "react";
import tripsData from "../../data/tripsData";
import BookingForm from "./BookingForm";

const TripDetails = () => {
  const { id } = useParams();
  const [showBooking, setShowBooking] = useState(false);

  const trip = tripsData.find((t) => t.id === Number(id));

  if (!trip) {
    return (
      <div className="pt-20 text-center text-red-500">
        Trip not found
      </div>
    );
  }

  return (
    <div className="pt-20 px-4 max-w-6xl mx-auto bg-gray-50 min-h-screen pb-5">

      <div className="bg-white rounded-xl shadow overflow-hidden">

        {/* ================= HERO IMAGE ================= */}
        <div className="relative h-[420px]">
          <img
            src={trip.image}
            alt={trip.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h1 className="travel-heading text-3xl md:text-4xl font-extrabold">
              {trip.title}
            </h1>
            <p className="text-gray-200 mt-1 text-sm">
              📍 {trip.location} • Starts from {trip.startLocation}
            </p>
          </div>
        </div>

        <div className="p-6">

          {/* ================= BASIC INFO STRIP ================= */}
         <div className="mt-6 bg-blue-50 rounded-xl p-4 grid grid-cols-2 md:grid-cols-5 gap-3">

  <div>
    <p className="text-xs sm:text-sm text-gray-500">Price</p>
    <p className="travel-heading text-base sm:text-lg md:text-xl font-bold text-blue-700">
      ₹{trip.pricePerPerson} / person
    </p>
  </div>

  <div>
    <p className="text-xs sm:text-sm text-gray-500">Duration</p>
    <p className="text-sm sm:text-base font-semibold">
      {trip.duration.days} Days / {trip.duration.nights} Nights
    </p>
  </div>

  <div>
    <p className="text-xs sm:text-sm text-gray-500">People</p>
    <p className="text-sm sm:text-base font-semibold">
      {trip.totalPeople} Persons
    </p>
  </div>

  <div>
    <p className="text-xs sm:text-sm text-gray-500">Stay</p>
    <p className="text-sm sm:text-base font-semibold">
      {trip.stayType}
    </p>
  </div>

  <div>
    <p className="text-xs sm:text-sm text-gray-500">Travel Mode</p>
    <p className="text-sm sm:text-base font-semibold">
      {trip.travelVia}
    </p>
  </div>

</div>


          {/* ================= DATES ================= */}
          <div className="mt-4 text-gray-600">
            <p>
              <span className="font-semibold">Trip Dates:</span>{" "}
              {trip.startDate} to {trip.endDate}
            </p>
          </div>

          {/* ================= DESCRIPTION ================= */}
          <p className="mt-8 text-gray-700 leading-loose text-base">
            {trip.description}
          </p>

          {/* ================= MEALS ================= */}
          <div className="mt-8">
            <h3 className="travel-heading font-bold text-blue-700 mb-3">
              Meals Included
            </h3>
            <div className="flex gap-4 text-gray-600">
              {trip.meals.breakfast && <span>🍳 Breakfast</span>}
              {trip.meals.lunch && <span>🍱 Lunch</span>}
              {trip.meals.dinner && <span>🍽️ Dinner</span>}
            </div>
          </div>

          {/* ================= ITINERARY ================= */}
          <div className="mt-10">
            <h3 className="travel-heading font-bold text-blue-700 mb-4">
              Day-wise Itinerary
            </h3>

            <div className="space-y-4">
              {trip.itinerary.map((day, index) => (
                <div
                  key={index}
                  className="relative border-l-4 border-blue-600 bg-blue-50 rounded-lg p-4"
                >
                  <h4 className="travel-heading font-bold text-blue-700 mb-2">
                    Day {day.day}: {day.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {day.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ================= MANDATORY ITEMS ================= */}
          <div className="mt-10 bg-gray-50 rounded-xl p-5 border">
            <h3 className="travel-heading font-bold text-blue-700 mb-3">
              Mandatory Things to Carry
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {trip.mandatoryItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>


          <p className="text-center text-sm text-gray-500 mt-8">
            🛡 Verified Travel Partner • 🚍 Safe Transport • 📞 24×7 Support
          </p>

          <button
            onClick={() => setShowBooking(true)}
            className="mt-10 w-full bg-gradient-to-r from-blue-600 to-blue-700 
                       text-white py-4 rounded-full font-semibold tracking-wider 
                       hover:scale-[1.02] transition duration-300 shadow-lg"
          >
            Book This Journey
          </button>

          {showBooking && (
            <BookingForm
              tripPrice={trip.pricePerPerson}
              onClose={() => setShowBooking(false)}
            />
          )}

        </div>
      </div>
    </div>
  );
};

export default TripDetails;
