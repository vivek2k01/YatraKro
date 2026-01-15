import { useParams } from "react-router-dom";
import { useState } from "react";
import tripsData from "../../data/tripsData";
import BookingForm from "./BookingForm";

const TripDetails = () => {
  const { id } = useParams();
  const [showBooking, setShowBooking] = useState(false);

  const trip = tripsData.find((t) => t.id === Number(id));

  if (!trip) return <div className="pt-32 text-center text-red-500 font-black">TRIP NOT FOUND</div>;

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-8 bg-[#F8FAFC] selection:bg-orange-500 selection:text-white bg-gradient-to-b from-blue-100 via-white to-sky-130">
      
      {/* --- FLOATING BREADCRUMB --- */}
      <div className="max-w-7xl mx-auto mb-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
        <span>Home</span> <span>/</span> <span>Destinations</span> <span>/</span> <span className="text-blue-900">{trip.location}</span>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* ================= LEFT CONTENT (8 COLUMNS) ================= */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* HERO IMAGE CARD */}
          <div className="relative h-[400px] md:h-[550px] rounded-[3rem] overflow-hidden shadow-2xl group border-4 border-white">
            <img src={trip.image} alt={trip.title} className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/20 to-transparent"></div>
            
            {/* BADGES ON IMAGE */}
            <div className="absolute top-8 left-8 flex gap-3">
               <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/30">Verified Journey</span>
               <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">Trending</span>
            </div>

            <div className="absolute bottom-10 left-10 right-10">
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-4">
                {trip.title}<span className="text-orange-500">.</span>
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-blue-100 font-bold text-sm">
                 <span className="flex items-center gap-2">📍 {trip.location}</span>
                 <span className="flex items-center gap-2">🚀 Starts: {trip.startLocation}</span>
                 <span className="flex items-center gap-2 text-orange-400">💎 {trip.stayType}</span>
              </div>
            </div>
          </div>

          {/* HIGHLIGHTS STRIP */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[
               { label: "Duration", val: `${trip.duration.days}D / ${trip.duration.nights}N`, icon: "⏳" },
               { label: "Travel Via", val: trip.travelVia, icon: "🚌" },
               { label: "Group Size", val: `${trip.totalPeople} Max`, icon: "👥" },
               { label: "Meals", val: "Inc. All", icon: "🍱" }
             ].map((item, i) => (
               <div key={i} className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center text-center">
                 <span className="text-2xl mb-2">{item.icon}</span>
                 <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
                 <p className="text-xs font-black text-blue-900 mt-1">{item.val}</p>
               </div>
             ))}
          </div>

          {/* DESCRIPTION */}
          <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
             <div className="flex items-center gap-3 mb-6">
                <div className="h-1.5 w-12 bg-orange-500 rounded-full"></div>
                <h2 className="text-2xl font-black text-blue-900 tracking-tight">Overview</h2>
             </div>
             <p className="text-slate-500 font-medium leading-[2] text-base mb-8">
               {trip.description}
             </p>
             <div className="flex flex-wrap gap-4">
                {trip.meals.breakfast && <span className="bg-blue-50 text-blue-900 px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-tighter">🍳 Breakfast Included</span>}
                {trip.meals.dinner && <span className="bg-blue-50 text-blue-900 px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-tighter">🍽️ Dinner Included</span>}
             </div>
          </div>

          {/* ITINERARY SECTION */}
          <div className="space-y-6">
             <h2 className="text-3xl font-black text-blue-900 tracking-tight ml-4">The Experience <span className="text-orange-500">Map.</span></h2>
             {trip.itinerary.map((day, idx) => (
               <div key={idx} className="group bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:border-blue-200 transition-all">
                  <div className="flex gap-6">
                     <span className="text-5xl font-black text-slate-100 group-hover:text-blue-50 transition-colors">0{day.day}</span>
                     <div>
                        <h4 className="text-xl font-black text-blue-900 mb-2 uppercase tracking-tight">{day.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{day.details}</p>
                     </div>
                  </div>
               </div>
             ))}
          </div>
        </div>

        {/* ================= RIGHT SIDEBAR (4 COLUMNS) ================= */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 space-y-6">
            
            {/* PRICE & DATE CARD */}
            <div className="bg-blue-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl"></div>
               
               <div className="relative z-10">
                  <p className="text-blue-300 text-[10px] font-black uppercase tracking-[0.3em] mb-1">Starting Price</p>
                  <div className="flex items-end gap-2 mb-8">
                    <span className="text-6xl font-black text-orange-500 leading-none">₹{trip.pricePerPerson}</span>
                    <span className="text-sm font-bold text-blue-200 mb-1">/Person</span>
                  </div>

                  <div className="space-y-4 mb-8">
                     <div className="bg-white/5 border border-white/10 p-5 rounded-3xl">
                        <p className="text-blue-300 text-[9px] font-black uppercase tracking-widest mb-3">Trip Dates</p>
                        <div className="flex justify-between items-center">
                           <div>
                              <p className="text-[10px] text-blue-200 uppercase">Departure</p>
                              <p className="text-sm font-black">{trip.startDate}</p>
                           </div>
                           <div className="w-8 h-[1px] bg-white/20"></div>
                           <div className="text-right">
                              <p className="text-[10px] text-blue-200 uppercase">Return</p>
                              <p className="text-sm font-black">{trip.endDate}</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <button 
                    onClick={() => setShowBooking(true)}
                    className="w-full bg-orange-500 text-white py-5 rounded-[2rem] font-black uppercase text-xs tracking-widest hover:bg-white hover:text-blue-900 transition-all duration-500 shadow-xl"
                  >
                    Confirm Booking
                  </button>
               </div>
            </div>

            {/* PACKING LIST CARD */}
            <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm">
               <h3 className="text-blue-900 font-black text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
                 <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Packing Checklist
               </h3>
               <div className="space-y-4">
                  {trip.mandatoryItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 group">
                       <div className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center text-[10px] group-hover:bg-orange-500 group-hover:text-white transition-colors">✓</div>
                       <span className="text-[11px] font-bold text-slate-500 uppercase tracking-tight">{item}</span>
                    </div>
                  ))}
               </div>
            </div>

            {/* TRUST BADGE */}
            <div className="text-center">
               <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.4em]">Verified by YatraKro</p>
            </div>

          </div>
        </div>
      </div>

      {/* MODAL */}
      {showBooking && <BookingForm tripPrice={trip.pricePerPerson} onClose={() => setShowBooking(false)} />}
    </div>
  );
};

export default TripDetails;