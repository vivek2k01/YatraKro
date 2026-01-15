import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

/* ===== IMAGES IMPORT ===== */
import khajuraho from "../../assets/khajuraho.jpg";
import ujjain from "../../assets/ujjain.jpg";
import maheshwar from "../../assets/maheshwar.jpg";
import pachmarhi from "../../assets/pachmarhi.jpg";
import indore from "../../assets/indore.jpg";
import somnath from "../../assets/somnath.jpg";
import dwarka from "../../assets/dwarka.jpg";
import gir from "../../assets/gir.jpg";
import statueOfUnity from "../../assets/statueofunity.jpg";
import pavagarh from "../../assets/pavagarh.jpg";
import jaipur from "../../assets/jaipur.jpg";
import udaipur from "../../assets/udaipur.jpg";
import jaisalmer from "../../assets/jaisalmer.jpg";
import jodhpur from "../../assets/jodhpur.jpg";
import pushkar from "../../assets/pushkar.jpg";
import trimbakeshwar from "../../assets/trimbakeshwar.jpg";
import bhimashankar from "../../assets/bhimashankar.jpg";
import lonavala from "../../assets/lonavala.jpg";
import shirdi from "../../assets/shirdi.jpg";
import ajantaEllora from "../../assets/ajantaellora.jpg";
import munnar from "../../assets/munnar.jpg";
import alleppey from "../../assets/alleppey.jpg";
import wayanad from "../../assets/wayanad.jpg";
import kochi from "../../assets/kochi.jpg";
import varkala from "../../assets/varkala.jpg";
import manali from "../../assets/manali.jpg";
import shimla from "../../assets/simla.jpg";
import dharamshala from "../../assets/dharamshala.jpg";
import spiti from "../../assets/spiti.jpg";
import chandrashila from "../../assets/chandrashila.jpg";
import kashmir from "../../assets/kashmir.jpg";
import gulmarg from "../../assets/gulmarg.jpg";
import pahalgam from "../../assets/pahalgam.jpg";
import sonmarg from "../../assets/sonmarg.jpg";
import varansi from "../../assets/varansi.jpg";
import vrindavan from "../../assets/vrindavan.jpg";
import agra from "../../assets/taj1.jpg";
import ayodhya from "../../assets/ayodhya1.jpg";
import mathura from "../../assets/mathura.jpg";
import puri from "../../assets/puri.jpg";
import konark from "../../assets/konark.jpg";
import bhubhaneswar from "../../assets/bhubaneswar.jpg";
import chilika from "../../assets/chilika.jpg";
import simlipal from "../../assets/simlipal.jpg";
import loktak from "../../assets/loktak.jpg";
import kangla from "../../assets/kangla.jpg";
import shirui from "../../assets/shirui.jpg";
import imphal from "../../assets/imphal.jpg";
import hydarabad from "../../assets/hydarabad.jpg";
import kedarnath from "../../assets/kedarnath.jpg";

const destinations = [
  { state: "Manipur", place: "Imphal", img: imphal },
  { state: "Manipur", place: "Loktak Lake", img: loktak },
  { state: "Manipur", place: "Kangla Fort", img: kangla },
  { state: "Manipur", place: "Shirui Lily", img: shirui },
  { state: "Odisha", place: "Puri", img: puri },
  { state: "Odisha", place: "Konark", img: konark },
  { state: "Odisha", place: "Bhubaneswar", img: bhubhaneswar },
  { state: "Odisha", place: "Chilika Lake", img: chilika },
  { state: "Odisha", place: "Simlipal National Park", img: simlipal },
  { state: "Uttar Pradesh", place: "Varanasi", img: varansi },
  { state: "Uttar Pradesh", place: "Ayodhya", img: ayodhya },
  { state: "Uttar Pradesh", place: "Agra", img: agra },
  { state: "Uttar Pradesh", place: "Mathura", img: mathura },
  { state: "Uttar Pradesh", place: "Vrindavan", img: vrindavan },
  { state: "Jammu & Kashmir", place: "Srinagar", img: kashmir },
  { state: "Jammu & Kashmir", place: "Gulmarg", img: gulmarg },
  { state: "Jammu & Kashmir", place: "Pahalgam", img: pahalgam },
  { state: "Jammu & Kashmir", place: "Sonmarg", img: sonmarg },
  { state: "Himachal Pradesh", place: "Manali", img: manali },
  { state: "Himachal Pradesh", place: "Shimla", img: shimla },
  { state: "Himachal Pradesh", place: "Dharamshala", img: dharamshala },
  { state: "Himachal Pradesh", place: "Spiti Valley", img: spiti },
  { state: "Himachal Pradesh", place: "Chandrashila Peak", img: chandrashila },
  { state: "Kerala", place: "Munnar", img: munnar },
  { state: "Kerala", place: "Alleppey", img: alleppey },
  { state: "Kerala", place: "Wayanad", img: wayanad },
  { state: "Kerala", place: "Kochi", img: kochi },
  { state: "Kerala", place: "Varkala", img: varkala },
  { state: "Maharashtra", place: "Trimbakeshwar", img: trimbakeshwar },
  { state: "Maharashtra", place: "Bhimashankar", img: bhimashankar },
  { state: "Maharashtra", place: "Lonavala", img: lonavala },
  { state: "Maharashtra", place: "Shirdi", img: shirdi },
  { state: "Maharashtra", place: "Ajanta Ellora", img: ajantaEllora },
  { state: "Madhya Pradesh", place: "Khajuraho", img: khajuraho },
  { state: "Madhya Pradesh", place: "Ujjain", img: ujjain },
  { state: "Madhya Pradesh", place: "Maheshwar", img: maheshwar },
  { state: "Madhya Pradesh", place: "Pachmarhi", img: pachmarhi },
  { state: "Madhya Pradesh", place: "Indore", img: indore },
  { state: "Gujarat", place: "Somnath", img: somnath },
  { state: "Gujarat", place: "Dwarka", img: dwarka },
  { state: "Gujarat", place: "Gir National Park", img: gir },
  { state: "Gujarat", place: "Statue of Unity", img: statueOfUnity },
  { state: "Gujarat", place: "Pavagarh", img: pavagarh },
  { state: "Rajasthan", place: "Jaipur", img: jaipur },
  { state: "Rajasthan", place: "Udaipur", img: udaipur },
  { state: "Rajasthan", place: "Jaisalmer", img: jaisalmer },
  { state: "Rajasthan", place: "Jodhpur", img: jodhpur },
  { state: "Rajasthan", place: "Pushkar", img: pushkar },
  { state: "Telangana", place: "Hyderabad", img: hydarabad },
  { state: "Utterakhand", place: "Kedarnath", img: kedarnath },
];

const Destinations = () => {
  const navigate = useNavigate();
  // FAST LOAD LOGIC: Pehle sirf 8 cards load honge
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    // 1 second baad baaki data load hoga, tab tak initial cards ready ho jayenge
    const timer = setTimeout(() => {
      setVisibleCount(destinations.length);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleDestinationClick = (place) => {
    navigate(`/trips?destination=${place}`);
  };

  return (
    <div className="min-h-screen px-4 md:px-6 py-10 md:py-12 selection:bg-orange-500 selection:text-white bg-gradient-to-b from-blue-100 via-white to-sky-130">
      
      {/* --- HEADER SECTION (Same as Trips.jsx) --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }} className="relative max-w-7xl mx-auto mb-16 mt-16 text-center px-4">
        <div className="flex justify-center items-center gap-2 mb-4">
          <div className="h-[1px] w-6 bg-orange-500 rounded-full"></div>
          <span className="text-blue-900 font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs">
            Wanderlust Diaries
          </span>
          <div className="h-[1px] w-6 bg-orange-500 rounded-full"></div>
        </div>

        <h2 className="text-4xl md:text-7xl font-black text-blue-900 tracking-tight leading-tight">
          Epic Journeys<span className="text-orange-500">.</span>
        </h2>

        <p className="mt-4 md:mt-6 text-slate-500 max-w-xl mx-auto text-sm md:text-lg font-light">
          "The world is a book and those who do not travel read only a page."
        </p>
      </motion.div>

      {/* --- ADVENTURE CARD GRID --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12 md:gap-y-20">
        {destinations.slice(0, visibleCount).map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index % 4 * 0.1 }}
            onClick={() => handleDestinationClick(item.place)}
            className="group relative h-[320px] md:h-[400px] w-full transition-all duration-500 cursor-pointer"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-blue-400 rounded-[2rem] md:rounded-[3rem] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

            {/* Image Wrapper */}
            <div className="relative h-full w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl transition-all duration-500 transform group-hover:-translate-y-3 border-2 md:border-4 border-white bg-slate-200">
              <img
                src={item.img}
                alt={item.place}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] scale-110 group-hover:scale-100"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/20 to-transparent opacity-80" />

              {/* State Badge */}
              <div className="absolute top-4 md:top-6 -right-1">
                <div className="bg-white px-3 py-1 md:px-5 md:py-1.5 rounded-l-full shadow-lg flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></div>
                  <span className="text-blue-900 text-[9px] md:text-[10px] font-black uppercase tracking-widest">
                    {item.state}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 z-10">
                <p className="text-orange-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  Explore Trip
                </p>
                <h3 className="text-white text-xl md:text-2xl font-bold leading-none mb-2 md:mb-3">
                  {item.place}
                </h3>
                <div className="h-0.5 w-0 group-hover:w-full bg-orange-500 transition-all duration-700 rounded-full"></div>
              </div>
            </div>

            {/* Action Button */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
              <div className="bg-orange-500 text-white px-4 py-2.5 md:px-5 md:py-3.5 rounded-full shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-900 flex items-center gap-2">
                <span className="max-w-0 overflow-hidden group-hover:max-w-[80px] transition-all duration-500 text-[10px] md:text-xs font-bold uppercase">
                  View
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- FOOTER DECORATION --- */}
      <div className="mt-20 text-center border-t border-blue-100 pt-10">
        <p className="text-blue-300 font-serif italic text-lg md:text-2xl">
          Unfolding the beauty of India
        </p>
      </div>
    </div>
  );
};

export default Destinations;