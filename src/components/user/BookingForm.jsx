import { useState } from "react";

const BookingForm = ({ tripPrice, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phone: "",
    dob: "",
    persons: 1,
  });

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
    return age;
  };

  const age = formData.dob ? calculateAge(formData.dob) : "";
  const totalPrice = tripPrice * formData.persons;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const increasePersons = () => {
    if (formData.persons < 5) setFormData({ ...formData, persons: formData.persons + 1 });
  };

  const decreasePersons = () => {
    if (formData.persons > 1) setFormData({ ...formData, persons: formData.persons - 1 });
  };

  return (
    <div className="fixed inset-0 bg-blue-900/20 z-[999] flex items-start justify-center p-4 backdrop-blur-md overflow-y-auto pt-24">
      
      {/* MAIN CONTAINER: Matching with Trips/About Cards */}
      <div className="relative bg-white/90 backdrop-blur-xl rounded-[2.5rem] w-full max-w-[380px] shadow-2xl border-4 border-white overflow-hidden transition-all duration-500">
        
        {/* CLOSE BUTTON */}
        <button 
          onClick={onClose} 
          className="absolute top-5 right-5 text-blue-900/30 hover:text-orange-500 transition-colors z-20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6 md:p-8">
          {/* HEADER: Matches Your Header Style */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-[1px] w-4 bg-orange-500"></div>
              <span className="text-blue-900 font-bold tracking-[0.2em] uppercase text-[10px]">Secure Booking</span>
            </div>
            <h2 className="text-2xl font-black text-blue-900 tracking-tight">
              Confirm Trip<span className="text-orange-500">.</span>
            </h2>
          </div>

          <form className="space-y-3">
            {/* INPUTS: Matching Trips Search Bar Style */}
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                className="w-full bg-blue-50/50 border-none rounded-2xl px-4 py-3 text-xs font-bold text-blue-900 outline-none focus:ring-2 focus:ring-orange-500 transition-all placeholder:text-slate-400"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                className="w-full bg-blue-50/50 border-none rounded-2xl px-4 py-3 text-xs font-bold text-blue-900 outline-none focus:ring-2 focus:ring-orange-500 transition-all placeholder:text-slate-400"
              />
            </div>

            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              onChange={handleChange}
              className="w-full bg-blue-50/50 border-none rounded-2xl px-4 py-3 text-xs font-bold text-blue-900 outline-none focus:ring-2 focus:ring-orange-500 transition-all"
            />

            <input
              type="email"
              name="email"
              placeholder="Email ID"
              onChange={handleChange}
              className="w-full bg-blue-50/50 border-none rounded-2xl px-4 py-3 text-xs font-bold text-blue-900 outline-none focus:ring-2 focus:ring-orange-500 transition-all"
            />

            <div className="grid grid-cols-2 gap-2 items-center">
               <input
                type="date"
                name="dob"
                onChange={handleChange}
                className="w-full bg-blue-50/50 border-none rounded-2xl px-4 py-3 text-xs font-bold text-blue-900 outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              />
              <div className="text-[10px] font-black text-blue-900/40 bg-white rounded-2xl py-3 border-2 border-blue-50 text-center uppercase">
                {age ? `${age} Yrs` : "Age"}
              </div>
            </div>

            {/* SEPARATOR */}
            <div className="h-[1px] w-full bg-blue-50 my-2"></div>

            {/* PERSONS & PRICE: Matching Trips Card Details Style */}
            <div className="flex justify-between items-center py-2">
              <div className="flex items-center bg-blue-50 rounded-xl p-1">
                <button type="button" onClick={decreasePersons} className="w-8 h-8 flex items-center justify-center font-bold text-blue-900 hover:text-orange-500">−</button>
                <span className="px-3 text-sm font-black text-blue-900">{formData.persons}</span>
                <button type="button" onClick={increasePersons} className="w-8 h-8 flex items-center justify-center font-bold text-blue-900 hover:text-orange-500">+</button>
              </div>
              <div className="text-right">
                <p className="text-[9px] text-gray-400 uppercase font-black tracking-tighter leading-none">Total Price</p>
                <p className="text-xl font-black text-orange-500">₹{totalPrice}</p>
              </div>
            </div>

            {/* MAIN BUTTON: Matching Your Component Buttons */}
            <button
              type="submit"
              className="mt-2 w-full bg-blue-900 text-white py-4 rounded-2xl font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-orange-500 transition-all duration-300 shadow-lg shadow-blue-100 hover:shadow-orange-100"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;