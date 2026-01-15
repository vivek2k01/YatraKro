import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* --- MAIN GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* 1. BRAND SECTION (Spans 4 columns) */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
              <h2 className="text-2xl font-black text-blue-900 tracking-tighter">
                YatraKro<span className="text-orange-500">.</span>
              </h2>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              Crafting meaningful journeys across India's sacred paths and
              scenic wonders. We blend faith with comfort for an unforgettable
              experience.
            </p>
            {/* SOCIAL VIBE */}
            <div className="flex gap-4 pt-2">
              {["FB", "IG", "TW", "WA"].map((social) => (
                <div
                  key={social}
                  className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-black text-blue-900 hover:bg-orange-500 hover:text-white transition-all cursor-pointer"
                >
                  {social}
                </div>
              ))}
            </div>
          </div>

          {/* 2. QUICK LINKS (Spans 2 columns) */}
          <div className="md:col-span-2">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 mb-6">
              Company
            </h3>
            <ul className="space-y-4 text-sm font-bold text-blue-900/60">
              <li>
                <Link
                  to="/"
                  onClick={() => window.scrollTo(0, 0)}
                  className="hover:text-orange-500 transition-colors block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/trips"
                  onClick={() => window.scrollTo(0, 0)}
                  className="hover:text-orange-500 transition-colors block"
                >
                  Trips
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  onClick={() => window.scrollTo(0, 0)}
                  className="hover:text-orange-500 transition-colors block"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => window.scrollTo(0, 0)}
                  className="hover:text-orange-500 transition-colors block"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. TRENDING (Spans 2 columns) */}
          <div className="md:col-span-2">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 mb-6">
              Trending
            </h3>
            <ul className="space-y-4 text-sm font-bold text-blue-900/60">
              <li className="hover:text-orange-500 transition-colors cursor-pointer">
                Varanasi
              </li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">
                Kedarnath
              </li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">
                Manali
              </li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">
                Ayodhya
              </li>
            </ul>
          </div>

          {/* 4. NEWSLETTER (Spans 4 columns) */}
          <div className="md:col-span-4 bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-900 mb-2">
              Join the Club
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Get secret deals & travel guides.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white border border-slate-200 rounded-full px-5 py-3 text-xs outline-none focus:ring-2 focus:ring-orange-500/20"
              />
              <button className="absolute right-1.5 top-1.5 bg-blue-900 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-orange-500 transition-all">
                Sub
              </button>
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">
            © {new Date().getFullYear()} YatraKro — Spiritual Journeys Await.
          </p>
          <div className="flex gap-6 text-[10px] font-black text-blue-900/40 uppercase tracking-widest">
            <span className="hover:text-orange-500 cursor-pointer">
              Privacy
            </span>
            <span className="hover:text-orange-500 cursor-pointer">Terms</span>
            <span className="hover:text-orange-500 cursor-pointer">
              Support
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
