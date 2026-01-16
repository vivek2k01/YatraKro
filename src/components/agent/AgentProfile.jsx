import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaBriefcase,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaStar,
  FaGlobe,
  FaFileInvoice,
  FaBuilding,
  FaCheckCircle,
  FaCamera,
  FaPlusCircle,
} from "react-icons/fa";

const AgentProfile = () => {
  const [profile, setProfile] = useState({
    name: "",
    agencyName: "",
    phone: "",
    whatsapp: "",
    email: "",
    location: "",
    experience: "",
    specialization: "",
    languages: "",
    about: "",
    gst: "",
    pan: "",
    address: "",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile Successfully Updated!");
  };

  // UI Components
  const inputStyle =
    "w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-3 px-4 md:py-3.5 md:px-5 outline-none focus:border-orange-500 focus:bg-white transition-all text-[13px] text-blue-900 font-bold placeholder:text-slate-300";
  const labelStyle =
    "text-[9px] font-black uppercase tracking-[0.15em] text-blue-900/60 mb-1.5 ml-1 flex items-center gap-2";
  const sectionHeader =
    "text-sm md:text-base font-black text-blue-900 mb-5 uppercase tracking-tighter flex items-center gap-2 border-l-4 border-orange-500 pl-3";

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-sky-130 p-3 md:p-8 selection:bg-orange-500 selection:text-white">
      {/* --- HEADER --- */}
      <div className="max-w-5xl mx-auto mb-6 mt-16 md:mt-24">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl md:text-4xl font-black text-blue-900 tracking-tighter uppercase italic">
            Profile <span className="text-orange-500">Settings.</span>
          </h1>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">
            Manage your identity and agency credentials
          </p>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* AVATAR SECTION */}
            <motion.div className="lg:col-span-4 bg-white rounded-[2rem] p-6 shadow-xl shadow-blue-900/5 border border-white flex flex-col items-center justify-center text-center">
              <div className="relative group cursor-pointer mb-4">
                <div className="w-28 h-28 md:w-36 md:h-36 bg-slate-50 rounded-[2.5rem] border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-300 text-3xl group-hover:border-orange-500 transition-all overflow-hidden">
                  <FaCamera className="group-hover:text-orange-500" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-blue-900 text-white p-2.5 rounded-xl shadow-lg">
                  <FaPlusCircle className="text-xs" />
                </div>
              </div>
              <p className="text-[10px] font-black uppercase text-blue-900 tracking-widest">
                Agency Badge
              </p>
            </motion.div>

            {/* IDENTITY SECTION */}
            <motion.div className="lg:col-span-8 bg-white rounded-[2rem] p-6 md:p-8 shadow-xl shadow-blue-900/5 border border-white">
              <h2 className={sectionHeader}>Identity Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className={labelStyle}>
                    <FaUser className="text-orange-500" /> Full Name
                  </label>
                  <input
                    name="name"
                    placeholder="John Doe"
                    className={inputStyle}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className={labelStyle}>
                    <FaBuilding className="text-orange-500" /> Agency Name
                  </label>
                  <input
                    name="agencyName"
                    placeholder="Exploring India"
                    className={inputStyle}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className={labelStyle}>
                    <FaEnvelope className="text-orange-500" /> Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="contact@agency.com"
                    className={inputStyle}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* CONTACT & LOCATION */}
          <motion.div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-xl shadow-blue-900/5 border border-white">
            <h2 className={sectionHeader}>Communication & Region</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <label className={labelStyle}>
                  <FaPhoneAlt className="text-orange-500" /> Phone
                </label>
                <input
                  name="phone"
                  placeholder="+91"
                  className={inputStyle}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className={labelStyle}>
                  <FaWhatsapp className="text-orange-500" /> WhatsApp
                </label>
                <input
                  name="whatsapp"
                  placeholder="+91"
                  className={inputStyle}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className={labelStyle}>
                  <FaMapMarkerAlt className="text-orange-500" /> Location
                </label>
                <input
                  name="location"
                  placeholder="City, State"
                  className={inputStyle}
                  onChange={handleChange}
                />
              </div>
            </div>
          </motion.div>

          {/* EXPERTISE & SPECIALIZATION */}
          <motion.div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-xl shadow-blue-900/5 border border-white">
            <h2 className={sectionHeader}>Professional Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className={labelStyle}>
                  <FaBriefcase className="text-orange-500" /> Experience
                </label>
                <input
                  name="experience"
                  placeholder="e.g. 5 Years"
                  className={inputStyle}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className={labelStyle}>
                  <FaStar className="text-orange-500" /> Specialization
                </label>
                <input
                  name="specialization"
                  placeholder="e.g. Treks"
                  className={inputStyle}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className={labelStyle}>
                  <FaGlobe className="text-orange-500" /> Languages
                </label>
                <input
                  name="languages"
                  placeholder="e.g. Hindi, English"
                  className={inputStyle}
                  onChange={handleChange}
                />
              </div>
            </div>
            <label className={labelStyle}>About the Expert</label>
            <textarea
              name="about"
              placeholder="Tell travelers about your journey..."
              className={`${inputStyle} h-24 resize-none`}
              onChange={handleChange}
            />
          </motion.div>

          {/* BUSINESS INFO */}
          <motion.div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-xl shadow-blue-900/5 border border-white">
            <h2 className={sectionHeader}>Legal & Tax Compliance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className={labelStyle}>
                  <FaFileInvoice className="text-orange-500" /> GST (Optional)
                </label>
                <input
                  name="gst"
                  className={inputStyle}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className={labelStyle}>
                  <FaFileInvoice className="text-orange-500" /> PAN Number
                </label>
                <input
                  name="pan"
                  className={inputStyle}
                  onChange={handleChange}
                />
              </div>
            </div>
            <label className={labelStyle}>Office Address</label>
            <textarea
              name="address"
              className={`${inputStyle} h-20 resize-none`}
              onChange={handleChange}
            />
          </motion.div>

          {/* BUTTON */}
          <div className="flex justify-end pb-8">
            <button
              type="submit"
              className="w-full md:w-auto bg-blue-900 text-white px-10 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest shadow-xl hover:bg-orange-500 transition-all flex items-center justify-center gap-3 active:scale-95"
            >
              Update Credentials <FaCheckCircle />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AgentProfile;
