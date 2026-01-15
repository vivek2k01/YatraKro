import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logos from "../assets/logos.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Trips", path: "/trips" },
    { name: "Destinations", path: "/destinations" },
    { name: "About", path: "/about" },
    // { name: "Login/SingUP", path: "/login" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 md:py-4" 
            : "bg-transparent py-5 md:py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* --- LOGO (Increased size for Tablet/Desktop) --- */}
          <Link to="/" className="relative z-[1001]">
            <img 
              src={logos} 
              alt="YatraKro" 
              loading="lazy"    
                    decoding="async"
              className={`transition-all duration-300 ${
                scrolled ? "h-8 md:h-10 lg:h-12" : "h-9 md:h-12 lg:h-14"
              } w-auto object-contain ${
                !scrolled && !menuOpen ? "brightness-0 invert" : ""
              }`} 
            />
          </Link>

          {/* --- DESKTOP/TABLET NAV (Professional & Larger) --- */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-2 text-xs lg:text-sm font-black uppercase tracking-[0.15em] transition-all group ${
                    location.pathname === link.path 
                      ? "text-orange-500" 
                      : scrolled ? "text-blue-900 hover:text-orange-500" : "text-white hover:text-orange-400"
                  }`}
                >
                  {link.name}
                  {/* Subtle underline effect for desktop */}
                  <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-orange-500 transform origin-left transition-transform duration-300 ${location.pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                </Link>
              ))}
            </div>
            
            {/* CTA Button (Bigger for Desktop) */}
            <button onClick={() => navigate("/login")} className="bg-blue-900 text-white px-8 py-3.5 lg:px-10 lg:py-4 rounded-full text-[11px] lg:text-xs font-black uppercase tracking-widest hover:bg-orange-500 hover:shadow-xl transition-all transform hover:-translate-y-1">
              login
            </button>
          </div>

          {/* --- MOBILE TOGGLE (Remains exactly as before) --- */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden z-[1001] p-2 flex flex-col gap-1.5 items-end"
          >
            <motion.span animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} className={`h-[1.5px] rounded-full transition-colors ${menuOpen || scrolled ? "bg-blue-900 w-6" : "bg-white w-6"}`} />
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="h-[1.5px] bg-orange-500 rounded-full w-4" />
            <motion.span animate={motion.span && menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} className={`h-[1.5px] rounded-full transition-colors ${menuOpen || scrolled ? "bg-blue-900 w-6" : "bg-white w-6"}`} />
          </button>
        </div>
      </nav>

      {/* --- MOBILE OVERLAY (Compact as requested) --- */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-blue-950/20 backdrop-blur-md z-[998]"
            />
            <motion.div 
              initial={{ y: "-100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 w-full bg-white z-[999] shadow-2xl pt-24 pb-8 px-8 border-b-4 border-orange-500 rounded-b-[2.5rem]"
            >
              <div className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name}
                    to={link.path} 
                    onClick={() => setMenuOpen(false)}
                    className={`text-2xl font-black tracking-tighter flex items-center justify-between py-2 ${
                      location.pathname === link.path ? "text-orange-500" : "text-blue-900"
                    }`}
                  >
                    {link.name}
                    {location.pathname === link.path && <div className="h-2 w-2 rounded-full bg-orange-500" />}
                  </Link>
                ))}
               <button 
  onClick={() => {
    navigate("/login");
    setMenuOpen(false);
  }} 
  className="w-full bg-blue-900 text-white py-4 mt-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-orange-500 transition-colors"
>
  Login / Signup
</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;