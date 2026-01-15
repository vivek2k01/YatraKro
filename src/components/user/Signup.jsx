import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import flight from "../../assets/flight1.jpg";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

const Signup = () => {
  const navigate = useNavigate();
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const dummyOtp = "123456";

  const handleSendOtp = () => {
    setIsOtpSent(true);
    setError("");
  };

  const handleVerifyOtp = (e) => {
    const val = e.target.value;
    setOtp(val);
    if (val === dummyOtp) {
      setIsVerified(true);
      setError("");
    } else if (val.length === 6) {
      setError("Invalid OTP. Try 123456");
      setIsVerified(false);
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (isVerified) {
      navigate("/");
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-start justify-center lg:justify-end overflow-x-hidden bg-slate-900">
      
      {/* --- BACKGROUND IMAGE WITH MOTION --- */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5 }}
          src={flight} 
          alt="Travel" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/40 to-transparent"></div>
      </div>

      {/* --- LEFT SIDE BRANDING (DESKTOP) --- */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2 hidden lg:block z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-[100px] font-black text-white/10 leading-[0.9] tracking-tighter">
            EXPLORE<br />BEYOND<span className="text-orange-500/20">.</span>
          </h1>
          <p className="text-orange-400 font-black tracking-[0.4em] uppercase text-xs mt-6 ml-4 border-l-2 border-orange-500/50 pl-4">
            Your Premium Travel Partner
          </p>
        </motion.div>
      </div>

      {/* --- SIGNUP CARD --- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-[480px] mx-4 lg:mr-24 pt-24 pb-12"
      >
        <div className="bg-white/10 backdrop-blur-2xl rounded-[3rem] p-8 md:p-12 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border border-white/20">
          
          {/* HEADER */}
          <div className="mb-8 text-center lg:text-left">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "60px" }}
              className="h-1 bg-orange-500 mb-4 mx-auto lg:mx-0 rounded-full"
            ></motion.div>
            <h2 className="text-4xl font-black text-white tracking-tight mb-2">
              Join Us<span className="text-orange-500">.</span>
            </h2>
            <p className="text-blue-100/60 text-[10px] font-black uppercase tracking-[0.2em]">
              Start your adventure today
            </p>
          </div>

          {/* FORM SECTION */}
          <form className="space-y-5" onSubmit={handleSignup}>
            
            <input
              type="text"
              required
              placeholder="Full Name"
              className="w-full bg-white/5 border-b-2 border-white/10 py-3 px-2 text-white outline-none focus:border-orange-500 transition-all font-medium placeholder:text-white/20 text-sm"
            />

            <div className="relative group">
              <input
                type="email"
                required
                placeholder="Email Address"
                className="w-full bg-white/5 border-b-2 border-white/10 py-3 px-2 text-white outline-none focus:border-orange-500 transition-all font-medium placeholder:text-white/20 text-sm"
              />
              {!isOtpSent && (
                <button
                  type="button"
                  onClick={handleSendOtp}
                  className="absolute right-0 top-2 text-[10px] font-black text-orange-500 uppercase tracking-widest hover:text-white transition-colors"
                >
                  Send OTP
                </button>
              )}
            </div>

            {/* OTP SECTION */}
            <AnimatePresence>
              {isOtpSent && !isVerified && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-1"
                >
                  <input
                    type="text"
                    maxLength="6"
                    value={otp}
                    onChange={handleVerifyOtp}
                    placeholder="Enter OTP"
                    className="w-full bg-white/5 border-b-2 border-white/10 py-3 px-2 text-white outline-none focus:border-orange-500 transition-all text-sm tracking-[0.5em] text-center placeholder:tracking-normal placeholder:opacity-50"
                  />
                  {error && (
                    <p className="text-red-500 text-[10px] font-bold uppercase text-center mt-1">
                      {error}
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* UNLOCKED SECTION (PASSWORD) */}
            {isVerified && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-5"
              >
                <p className="text-green-400 text-[10px] font-black uppercase tracking-widest text-left">
                  ✓ Email Verified
                </p>
                <input
                  type="password"
                  required
                  placeholder="Set Password"
                  className="w-full bg-white/5 border-b-2 border-white/10 py-3 px-2 text-white outline-none focus:border-orange-500 transition-all text-sm"
                />
              </motion.div>
            )}

            <motion.button
              whileHover={isVerified ? { scale: 1.02 } : {}}
              whileTap={isVerified ? { scale: 0.98 } : {}}
              type="submit"
              disabled={!isVerified}
              className={`w-full py-5 rounded-2xl font-black uppercase text-xs tracking-[0.3em] transition-all duration-500 mt-4 shadow-2xl ${
                isVerified
                  ? "bg-orange-500 text-white hover:bg-white hover:text-blue-900 shadow-orange-500/20"
                  : "bg-white/5 text-white/20 cursor-not-allowed"
              }`}
            >
              Create Account
            </motion.button>
          </form>

          {/* SOCIAL SIGNUP */}
          {!isVerified && (
            <>
              <div className="flex items-center gap-4 my-8">
                <div className="h-[1px] flex-1 bg-white/10"></div>
                <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">
                  Quick Join
                </span>
                <div className="h-[1px] flex-1 bg-white/10"></div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 py-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white hover:text-blue-900 transition-all text-white text-[10px] font-black uppercase tracking-widest group">
                  <GoogleIcon className="!w-4 !h-4" />
                  Google
                </button>
                <button className="flex items-center justify-center gap-2 py-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white hover:text-blue-900 transition-all text-white text-[10px] font-black uppercase tracking-widest group">
                  <AppleIcon className="!w-4 !h-4" />
                  Apple ID
                </button>
              </div>
            </>
          )}

          {/* SWITCH TO LOGIN */}
          <div className="mt-8 text-center border-t border-white/5 pt-6">
            <p className="text-[11px] text-white/40 font-bold uppercase tracking-widest">
              Already a member?{" "}
              <Link
                to="/login"
                className="text-orange-500 ml-2 font-black tracking-widest underline underline-offset-8 hover:text-white transition-colors"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;