import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/user/Home";
import Trip from "./components/user/Tips";
import About from "./components/user/About";
import Footer from "./components/Footer";
import TripDetails from "./components/user/TripDetails";
import ScrollToTop from "./components/ScrollToTop";
import Destinations from "./components/user/Destinations";
import Login from "./components/user/Login";
import Signup from "./components/user/Signup";



function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />

      <Routes>
      {/* login and signup routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

        <Route path="/" element={<Home/>} />
        <Route path="/trips" element={<Trip />} />
        <Route path="/trips/:id" element={<TripDetails />} />
        {/* Future */}
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
