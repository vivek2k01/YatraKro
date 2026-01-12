import { Link } from "react-router-dom";
import { useState } from "react";
import tripsData from "../../data/tripsData";
import { useSearchParams } from "react-router-dom";

const Trips = () => {
  const [fromInput, setFromInput] = useState("");
  const [toInput, setToInput] = useState("");
  const [dateInput, setDateInput] = useState("");

  const [appliedFrom, setAppliedFrom] = useState("");
  const [appliedTo, setAppliedTo] = useState("");
  const [appliedDate, setAppliedDate] = useState("");

  /* ================= SEARCH LOGIC (HOME STYLE) ================= */
  // const filteredTrips = tripsData.filter((trip) => {
  //   const fromMatch = appliedFrom
  //     ? trip.startLocation
  //         .toLowerCase()
  //         .includes(appliedFrom.toLowerCase())
  //     : true;

  //   const toMatch = appliedTo
  //     ? trip.location.toLowerCase().includes(appliedTo.toLowerCase()) ||
  //       trip.title.toLowerCase().includes(appliedTo.toLowerCase())
  //     : true;

  //   // ✅ DATE FILTER – ONLY SHOW IF DATE EXISTS & MATCHES
  //   const dateMatch = appliedDate
  //     ? trip.startDate === appliedDate
  //     : true;

  //   return fromMatch && toMatch && dateMatch;
  // });

  const [searchParams] = useSearchParams();
  const destination = searchParams.get("destination");

  const filteredTrips = tripsData.filter((trip) => {
    if (!destination) return true;

    const search = destination.toLowerCase();

    return (
      trip.title.toLowerCase().includes(search) ||
      trip.location.toLowerCase().includes(search) ||
      trip.startLocation.toLowerCase().includes(search)
    );
  });

  return (
    <div className="min-h-screen px-6 py-20 bg-gradient-to-b from-sky-100 via-white to-blue-50">
      {/* PAGE TITLE */}
      <h1 className="travel-heading text-3xl md:text-4xl font-bold text-center text-blue-700 mb-6">
        {destination ? `Trips for ${destination}` : "Available Trips"}
      </h1>

      {/* ================= SEARCH BAR (UI SAME) ================= */}
      <div className="bg-white rounded-xl shadow p-4 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* FROM */}
          <input
            type="text"
            placeholder="From (e.g. Delhi)"
            value={fromInput}
            onChange={(e) => setFromInput(e.target.value)}
            className="border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
          />

          {/* TO */}
          <input
            type="text"
            placeholder="To (e.g. Kedarnath, Manali)"
            value={toInput}
            onChange={(e) => setToInput(e.target.value)}
            className="border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
          />

          {/* DATE */}
          <input
            type="date"
            value={dateInput}
            onChange={(e) => setDateInput(e.target.value)}
            className="border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
          />

          {/* SEARCH / CLEAR */}
          <button
            onClick={() => {
              setAppliedFrom(fromInput);
              setAppliedTo(toInput);
              setAppliedDate(dateInput);
            }}
            className="bg-blue-600 text-white rounded-lg text-sm font-semibold
                       hover:bg-blue-700 transition py-3"
          >
            Search Trips
          </button>
        </div>

        {/* CLEAR */}
        {(appliedFrom || appliedTo || appliedDate) && (
          <div className="text-right mt-3">
            <button
              onClick={() => {
                setFromInput("");
                setToInput("");
                setDateInput("");
                setAppliedFrom("");
                setAppliedTo("");
                setAppliedDate("");
              }}
              className="text-sm text-blue-600 font-semibold hover:underline"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>

      {/* ================= TRIPS GRID ================= */}
      {filteredTrips.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          No trips found for selected search.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {filteredTrips.map((trip) => (
            <div
              key={trip.id}
              className="bg-white rounded-lg sm:rounded-xl
                         shadow hover:shadow-xl transition overflow-hidden"
            >
              {/* IMAGE */}
              <img
                src={trip.image}
                alt={trip.title}
                className="h-40 sm:h-48 w-full object-cover"
              />

              {/* CONTENT */}
              <div className="p-4 sm:p-5">
                <h2 className="travel-heading text-lg sm:text-xl font-bold text-blue-700">
                  {trip.title}
                </h2>

                <p className="text-gray-600 text-xs sm:text-sm mt-1">
                  {trip.location}
                </p>

                <p className="text-gray-500 text-xs sm:text-sm mt-1">
                  Starts from{" "}
                  <span className="font-semibold text-gray-700">
                    {trip.startLocation}
                  </span>
                </p>

                {/* INFO ROW */}
                <div className="flex justify-between items-center mt-3 sm:mt-4 text-xs sm:text-sm">
                  <span className="travel-heading font-bold text-blue-700 text-base sm:text-lg">
                    ₹{trip.pricePerPerson}
                  </span>

                  <span className="text-gray-500 font-medium">
                    {trip.duration.days}D / {trip.duration.nights}N
                  </span>
                </div>

                {/* EXTRA INFO */}
                <div className="flex justify-between items-center mt-1.5 sm:mt-2 text-[11px] sm:text-xs text-gray-500">
                  <span>{trip.totalPeople} People</span>
                  <span>{trip.stayType}</span>
                </div>

                {/* DATE */}
                <div className="mt-1.5 sm:mt-2 text-[11px] sm:text-xs text-gray-500">
                  {trip.startDate} → {trip.endDate}
                </div>

                {/* BUTTON */}
                <Link
                  to={`/trips/${trip.id}`}
                  className="block mt-4 sm:mt-5 text-center
                             bg-blue-600 text-white
                             py-2 sm:py-2.5
                             rounded-md sm:rounded-lg
                             text-sm sm:text-base
                             font-semibold tracking-wide
                             hover:bg-blue-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Trips;
