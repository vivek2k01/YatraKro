import React from "react";
import { motion } from "framer-motion";
import {
  FaRupeeSign,
  FaArrowTrendUp,
  FaArrowTrendDown,
  FaDownload,
  FaWallet,
  FaClock,
  FaRotateLeft,
  FaCreditCard,
  FaHashtag,
  FaCircle,
} from "react-icons/fa6";
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const transactions = [
  {
    id: "TXN-7721",
    date: "12 Feb 2026",
    customer: "Rahul Sharma",
    trip: "Vrindavan",
    amount: "12,000",
    mode: "UPI",
    status: "Paid",
  },
  {
    id: "TXN-7722",
    date: "14 Feb 2026",
    customer: "Sneha Kapoor",
    trip: "Kedarnath",
    amount: "24,500",
    mode: "Card",
    status: "Pending",
  },
  {
    id: "TXN-7723",
    date: "15 Feb 2026",
    customer: "Amit Verma",
    trip: "Manali",
    amount: "8,200",
    mode: "Net Banking",
    status: "Refunded",
  },
];

const AgentRevenue = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-sky-130 p-4 md:p-10 selection:bg-orange-500 selection:text-white">
      {/* --- HEADER --- */}
      <div className="max-w-7xl mx-auto mb-10 mt-20 md:mt-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="h-[2px] w-6 bg-orange-500"></div>
            <span className="text-blue-900 font-black tracking-[0.3em] uppercase text-[10px]">
              Financial Analytics
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-blue-900 tracking-tighter uppercase italic leading-none">
            Revenue <span className="text-orange-500">Insights.</span>
          </h1>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 bg-blue-900 text-white px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-orange-500 transition-all shadow-xl shadow-blue-900/10"
        >
          <FaDownload className="text-sm" /> Export Financial Report
        </motion.button>
      </div>

      {/* --- SUMMARY CARDS --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          {
            label: "Total Revenue",
            val: "8,40,000",
            icon: <FaWallet />,
            color: "text-emerald-600",
            bg: "bg-emerald-50",
            trend: "+12.5%",
            up: true,
          },
          {
            label: "Pending",
            val: "1,20,000",
            icon: <FaClock />,
            color: "text-orange-500",
            bg: "bg-orange-50",
            trend: "Action Required",
            up: false,
          },
          {
            label: "Refunded",
            val: "25,000",
            icon: <FaRotateLeft />,
            color: "text-red-500",
            bg: "bg-red-50",
            trend: "-2.1%",
            up: false,
          },
          {
            label: "This Month",
            val: "2,10,000",
            icon: <FaArrowTrendUp />,
            color: "text-blue-600",
            bg: "bg-blue-50",
            trend: "+18.2%",
            up: true,
          },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/70 backdrop-blur-sm p-6 rounded-[2.5rem] border-4 border-white shadow-xl shadow-blue-900/5 relative overflow-hidden group hover:shadow-2xl transition-all"
          >
            <div
              className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-4 text-xl group-hover:bg-blue-900 group-hover:text-white transition-all duration-500`}
            >
              {stat.icon}
            </div>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
              {stat.label}
            </p>
            <h2
              className={`text-3xl font-black tracking-tighter mt-1 ${stat.color} flex items-center italic`}
            >
              <FaRupeeSign className="text-lg mr-0.5" />
              {stat.val}
            </h2>
            <div className="mt-4 flex items-center gap-2">
              <div
                className={`px-2 py-0.5 rounded flex items-center gap-1 ${
                  stat.up ? "bg-emerald-100" : "bg-slate-100"
                }`}
              >
                {stat.up ? (
                  <FaArrowTrendUp className="text-emerald-500 text-[8px]" />
                ) : (
                  <FaArrowTrendDown className="text-slate-400 text-[8px]" />
                )}
                <span
                  className={`text-[9px] font-black ${
                    stat.up ? "text-emerald-600" : "text-slate-500"
                  }`}
                >
                  {stat.trend}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- TRANSACTIONS TABLE --- */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/50 backdrop-blur-md rounded-[2.5rem] border-4 border-white shadow-2xl shadow-blue-900/5 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-900/5 text-blue-900 uppercase text-[10px] font-black tracking-[0.2em]">
                  <th className="p-6">
                    <div className="flex items-center gap-2">
                      <CalendarMonthIcon className="text-orange-500" /> Date & ID
                    </div>
                  </th>
                  <th className="p-6">
                    <div className="flex items-center gap-2">
                      <PersonIcon className="text-orange-500" /> Name
                    </div>
                  </th>
                  
                  <th className="p-6">
                    <div className="flex items-center gap-2">
                      <LocationOnIcon className="text-orange-500" /> Location
                    </div>
                  </th>
                  <th className="p-6">
                    <div className="flex items-center gap-2">
                      <CurrencyRupeeIcon className="text-orange-500" /> Amount
                    </div>
                  </th>

                    <th className="p-6">
                    <div className="flex items-center gap-2">
                      <CreditCardIcon className="text-orange-500" /> Method
                    </div>
                  </th>

                  <th className="p-6">
                    <div className="flex items-center gap-2">
                      <HourglassBottomIcon className="text-orange-500" />Status
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-50">
                {transactions.map((txn, index) => (
                  <motion.tr
                    key={txn.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.8)" }}
                    className="transition-all group"
                  >
                    <td className="p-6">
                      <div className="flex flex-col">
                        <span className="font-bold text-blue-900 text-sm">
                          {txn.date}
                        </span>
                        <div className="flex items-center gap-1 mt-1">
                          <span className="bg-blue-100/50 text-blue-900 px-2 py-0.5 rounded font-mono text-[9px] font-bold group-hover:bg-blue-900 group-hover:text-white transition-all">
                            <FaHashtag className="inline mr-1 text-[7px]" />
                            {txn.id}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="p-6 font-black text-blue-900 uppercase italic tracking-tighter">
                      {txn.customer}
                    </td>
                    <td className="p-6">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                        <span className="text-sm font-bold text-slate-500 italic">
                          {txn.trip}
                        </span>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="flex items-center font-black text-blue-900 text-lg tracking-tighter">
                        <FaRupeeSign className="text-xs mr-0.5 text-orange-500" />{" "}
                        {txn.amount}
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                        <FaCreditCard className="text-blue-900/30 text-xs" />
                        {txn.mode}
                      </div>
                    </td>
                    <td className="p-6 text-right">
                      <span
                        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.1em] ${
                          txn.status === "Paid"
                            ? "bg-emerald-50 text-emerald-600"
                            : txn.status === "Pending"
                            ? "bg-orange-50 text-orange-600"
                            : "bg-red-50 text-red-600"
                        }`}
                      >
                        <FaCircle
                          className={`text-[5px] animate-pulse ${
                            txn.status === "Paid"
                              ? "text-emerald-400"
                              : txn.status === "Pending"
                              ? "text-orange-400"
                              : "text-red-400"
                          }`}
                        />
                        {txn.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentRevenue;
