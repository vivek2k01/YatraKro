import { motion } from "framer-motion";
import flight from "../../assets/flight1.jpg";
import { Link, useNavigate } from "react-router-dom";
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Direct home page par redirect karne ke liye
    navigate("/");
  };

  return (
    <div className="relative min-h-screen w-full flex items-start justify-center lg:justify-end overflow-hidden bg-slate-900">
      
      {/* --- PREMIUM BACKGROUND IMAGE --- */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          src={flight} 
          alt="Travel" 
          className="w-full h-full object-cover opacity-50" 
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 via-blue-900/40 to-transparent"></div>
      </div>

      {/* --- LEFT SIDE BRANDING (DESKTOP) --- */}
<div className="absolute left-16 top-1/2 -translate-y-1/2 hidden lg:block z-10">
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.4, duration: 1 }}
    className="max-w-xl"
  >
    {/* Minimalist Classic Heading */}
    <h1 className="text-[120px] font-black text-white/[0.04] leading-[0.75] tracking-tighter uppercase mb-6">
      DEPART<br />
      <span className="text-white/10 italic font-serif">Home.</span>
    </h1>

    {/* The Classic Hook */}
    <div className="ml-2 mt-4">
      <h3 className="text-3xl font-light text-white/90 tracking-tight leading-snug">
        The most beautiful <br /> 
        discovery is <span className="text-orange-500 font-medium">starting over.</span>
      </h3>
      
      {/* Elegant Bordered Subtext */}
      <div className="mt-8 flex items-center gap-4 group cursor-default">
        <div className="h-[2px] w-12 bg-orange-500 transition-all duration-700 group-hover:w-20"></div>
        <p className="text-orange-400 font-bold tracking-[0.6em] uppercase text-[10px]">
          Luxury Travel Redefined
        </p>
      </div>
    </div>

    {/* Classic Travel Coordinates/Stamp Vibe */}
    <div className="mt-20 ml-2 border-t border-white/5 pt-6 inline-flex flex-col">
      <span className="text-[10px] font-mono text-white/20 tracking-[0.4em] uppercase">
        Established MMXXIV
      </span>
      <span className="text-[10px] font-mono text-white/10 tracking-[0.2em] mt-1 italic">
        Curating Unforgettable Memories
      </span>
    </div>
  </motion.div>
</div>

      {/* --- LOGIN CARD --- */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-[460px] mx-4 lg:mr-24 pt-28 pb-10"
      >
        <div className="bg-white/10 backdrop-blur-3xl rounded-[3rem] p-8 md:p-12 border border-white/20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
          
          {/* HEADER SECTION */}
          <div className="mb-10 text-center lg:text-left">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "50px" }}
              className="h-1 bg-orange-500 mb-6 rounded-full mx-auto lg:mx-0"
            ></motion.div>
            <h2 className="text-5xl font-black text-white tracking-tighter leading-none mb-3">
              Sign In<span className="text-orange-500">.</span>
            </h2>
            <p className="text-blue-100/50 text-[10px] font-black uppercase tracking-[0.3em]">
              Welcome back to your luxury stay
            </p>
          </div>

          {/* SOCIAL LOGIN BUTTONS */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            <button className="flex items-center justify-center gap-3 py-3.5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white hover:text-blue-900 transition-all duration-500 group">
              <GoogleIcon className="w-5 h-5 invert group-hover:invert-0" />
              <span className="text-[10px] font-black uppercase tracking-widest">Google</span>
            </button>
            <button className="flex items-center justify-center gap-3 py-3.5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white hover:text-blue-900 transition-all duration-500 group">
              <AppleIcon className="w-5 h-5 invert group-hover:invert-0" />
              <span className="text-[10px] font-black uppercase tracking-widest">Apple ID</span>
            </button>
          </div>

          {/* DIVIDER */}
          <div className="flex items-center gap-4 mb-10">
            <div className="h-[1px] flex-1 bg-white/10"></div>
            <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em]">With Email</span>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>

          {/* FORM SECTION */}
          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="group relative">
              <input
                type="email"
                required
                placeholder="Email Address"
                className="w-full bg-transparent border-b-2 border-white/10 py-4 px-2 text-white outline-none focus:border-orange-500 transition-all duration-500 placeholder:text-white/20 font-medium"
              />
            </div>
            
            <div className="group relative">
              <input
                type="password"
                required
                placeholder="Password"
                className="w-full bg-transparent border-b-2 border-white/10 py-4 px-2 text-white outline-none focus:border-orange-500 transition-all duration-500 placeholder:text-white/20 font-medium"
              />
              <span className="absolute right-2 bottom-4 text-[10px] font-black text-orange-500 uppercase cursor-pointer hover:text-white transition-colors">
                Forgot?
              </span>
            </div>

            <div className="flex items-center gap-3 px-1 pt-2">
              <input type="checkbox" id="remember" className="accent-orange-500 w-4 h-4" />
              <label htmlFor="remember" className="text-[10px] font-black text-white/40 uppercase tracking-widest cursor-pointer hover:text-white transition-colors">
                Remember my session
              </label>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-orange-500 text-white py-5 rounded-[2rem] font-black uppercase text-xs shadow-[0_20px_40px_-10px_rgba(249,115,22,0.4)] hover:bg-white hover:text-blue-900 transition-all duration-500 mt-8"
            >
              Start Journey
            </motion.button>
          </form>

          {/* FOOTER */}
          <div className="mt-10 text-center border-t border-white/5 pt-8">
            <p className="text-[11px] text-white/40 font-bold uppercase tracking-widest">
              New Traveler? 
              <Link to="/signup" className="text-orange-500 font-black hover:text-white transition-colors underline underline-offset-8 ml-3">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;