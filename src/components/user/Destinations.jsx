import React from "react";
import { useNavigate } from "react-router-dom";

// madhya pradesh images
import khajuraho from "../../assets/khajuraho.jpg";
import ujjain from "../../assets/ujjain.jpg";
import maheshwar from "../../assets/maheshwar.jpg";
import pachmarhi from "../../assets/pachmarhi.jpg";
import indore from "../../assets/indore.jpg";

// gujarat images
import somnath from "../../assets/somnath.jpg";
import dwarka from "../../assets/dwarka.jpg";
import gir from "../../assets/gir.jpg";
import statueOfUnity from "../../assets/statueofunity.jpg";
import pavagarh from "../../assets/pavagarh.jpg";

// rajasthan images
import jaipur from "../../assets/jaipur.jpg";
import udaipur from "../../assets/udaipur.jpg";
import jaisalmer from "../../assets/jaisalmer.jpg";
import jodhpur from "../../assets/jodhpur.jpg";
import pushkar from "../../assets/pushkar.jpg";

// maharashtra images
import trimbakeshwar from "../../assets/trimbakeshwar.jpg";
import bhimashankar from "../../assets/bhimashankar.jpg";
import lonavala from "../../assets/lonavala.jpg";
import shirdi from "../../assets/shirdi.jpg";
import ajantaEllora from "../../assets/ajantaellora.jpg";

// kerala images
import munnar from "../../assets/munnar.jpg";
import alleppey from "../../assets/alleppey.jpg";
import wayanad from "../../assets/wayanad.jpg";
import kochi from "../../assets/kochi.jpg";
import varkala from "../../assets/varkala.jpg";

// himachal pradesh images
import manali from "../../assets/manali.jpg";
import shimla from "../../assets/simla.jpg";
import dharamshala from "../../assets/dharamshala.jpg";
import spiti from "../../assets/spiti.jpg";
import chandrashila from "../../assets/chandrashila.jpg";

// J&k
import kashmir from "../../assets/kashmir.jpg";
import gulmarg from "../../assets/gulmarg.jpg";
import pahalgam from "../../assets/pahalgam.jpg";
import sonmarg from "../../assets/sonmarg.jpg";

// uttar pradesh images are not added
import varansi from "../../assets/varansi.jpg";
import vrindavan from "../../assets/vrindavan.jpg";
import agra from "../../assets/taj1.jpg";
import ayodhya from "../../assets/ayodhya1.jpg";
import mathura from "../../assets/mathura.jpg";

// odisha images are not added
import puri from "../../assets/puri.jpg";
import konark from "../../assets/konark.jpg";
import bhubhaneswar from "../../assets/bhubaneswar.jpg";
import chilika from "../../assets/chilika.jpg";
import simlipal from "../../assets/simlipal.jpg";

// manipur images are not added
import loktak from "../../assets/loktak.jpg";
import kangla from "../../assets/kangla.jpg";
import shirui from "../../assets/shirui.jpg";
import imphal from "../../assets/imphal.jpg";

// telangana images are not added
import hydarabad from "../../assets/hydarabad.jpg";

const destinations = [

   // ================= MANIPUR =================
  { state: "Manipur", place: "Imphal", img: imphal },
  { state: "Manipur", place: "Loktak Lake", img: loktak }, 
  { state: "Manipur", place: "Kangla Fort", img: kangla },
  { state: "Manipur", place: "Shirui Lily", img: shirui },

   // ================= ODISHA =================
  { state: "Odisha", place: "Puri", img: puri },
  { state: "Odisha", place: "Konark", img: konark },
  { state: "Odisha", place: "Bhubaneswar", img: bhubhaneswar },
  { state: "Odisha", place: "Chilika Lake", img: chilika },
  { state: "Odisha", place: "Simlipal National Park", img: simlipal },

   // ================= UTTAR PRADESH =================
  { state: "Uttar Pradesh", place: "Varanasi", img: varansi },
  { state: "Uttar Pradesh", place: "Ayodhya", img: ayodhya },
  { state: "Uttar Pradesh", place: "Agra", img: agra },
  { state: "Uttar Pradesh", place: "Mathura", img: mathura },
  { state: "Uttar Pradesh", place: "Vrindavan", img: vrindavan },


   // ================= JAMMU & KASHMIR =================
  { state: "Jammu & Kashmir", place: "Srinagar", img: kashmir },
  { state: "Jammu & Kashmir", place: "Gulmarg", img: gulmarg },
  { state: "Jammu & Kashmir", place: "Pahalgam", img: pahalgam },
  { state: "Jammu & Kashmir", place: "Sonmarg", img: sonmarg },

  // ================ HIMACHAL PRADESH =================
  { state: "Himachal Pradesh", place: "Manali", img: manali },
  { state: "Himachal Pradesh", place: "Shimla", img: shimla },
  { state: "Himachal Pradesh", place: "Dharamshala", img: dharamshala },
  { state: "Himachal Pradesh", place: "Spiti Valley", img: spiti },
  { state: "Himachal Pradesh", place: "Chandrashila Peak", img: chandrashila },

  // ================= KERALA =================
  { state: "Kerala", place: "Munnar", img: munnar },
  { state: "Kerala", place: "Alleppey", img: alleppey },
  { state: "Kerala", place: "Wayanad", img: wayanad },
  { state: "Kerala", place: "Kochi", img: kochi },
  { state: "Kerala", place: "Varkala", img: varkala },

  // ================= MAHARASHTRA =================
  { state: "Maharashtra", place: "Trimbakeshwar", img: trimbakeshwar },
  { state: "Maharashtra", place: "Bhimashankar", img: bhimashankar },
  { state: "Maharashtra", place: "Lonavala", img: lonavala },
  { state: "Maharashtra", place: "Shirdi", img: shirdi },
  { state: "Maharashtra", place: "Ajanta Ellora", img: ajantaEllora },

  // ================= MADHYA PRADESH =================
  { state: "Madhya Pradesh", place: "Khajuraho", img: khajuraho },
  { state: "Madhya Pradesh", place: "Ujjain", img: ujjain },
  { state: "Madhya Pradesh", place: "Maheshwar", img: maheshwar },
  { state: "Madhya Pradesh", place: "Pachmarhi", img: pachmarhi },
  { state: "Madhya Pradesh", place: "Indore", img: indore },

  // ================= GUJARAT =================
  { state: "Gujarat", place: "Somnath", img: somnath },
  { state: "Gujarat", place: "Dwarka", img: dwarka },
  { state: "Gujarat", place: "Gir National Park", img: gir },
  { state: "Gujarat", place: "Statue of Unity", img: statueOfUnity },
  { state: "Gujarat", place: "Pavagarh", img: pavagarh },

  // ================= RAJASTHAN =================
  { state: "Rajasthan", place: "Jaipur", img: jaipur },
  { state: "Rajasthan", place: "Udaipur", img: udaipur },
  { state: "Rajasthan", place: "Jaisalmer", img: jaisalmer },
  { state: "Rajasthan", place: "Jodhpur", img: jodhpur },
  { state: "Rajasthan", place: "Pushkar", img: pushkar },

  // ================= TELANGANA =================
  { state: "Telangana", place: "Hyderabad", img: hydarabad },
  { state: "Telangana", place: "Warangal", img: "" },
  { state: "Telangana", place: "Bhadrachalam", img: "" },


];

const Destinations = () => {
  const navigate = useNavigate();

  const handleDestinationClick = (place) => {
    navigate(`/trips?destination=${place}`);
  };
  return (
    <div className="min-h-screen px-6 py-20 bg-gradient-to-b from-sky-100 via-white to-blue-50">
      <h1 className="travel-heading text-3xl sm:text-4xl text-center font-bold text-blue-700 mb-12">
        Explore Destinations Across India 🇮🇳
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {destinations.map((item, index) => (
          <div
            key={index}
            onClick={() => handleDestinationClick(item.place)}
            className="bg-white/90 backdrop-blur rounded-xl p-5 shadow-md
                       hover:shadow-xl transition hover:-translate-y-1 cursor-pointer"
          >
            {item.img && (
              <img
                src={item.img}
                alt={item.place}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
            )}

            <p className="text-sm text-gray-500">{item.state}</p>
            <h2 className="travel-heading text-lg font-semibold text-blue-700 mt-1">
              {item.place}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
