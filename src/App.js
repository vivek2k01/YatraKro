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
import TravelAgentDashboard from "./components/agent/TravelAgentDashboard";
import AgentActiveBookings from "./components/agent/AgentActiveBookings";
import AgentTrips from "./components/agent/AgentTrips";
import AgentCustomers from "./components/agent/AgentCustomers";
import AgentRevenue from "./components/agent/AgentRevenue";
import CreateNewTrip from "./components/agent/CreateNewTrip";
import AgentProfile from "./components/agent/AgentProfile";
import EditTrip from "./components/agent/EditTrip";
import ViewTripBookings from "./components/agent/ViewTripBookings";
import BookingDetails from "./components/agent/BookingDetails";
import AgentRefunds from "./components/agent/AgentRefunds";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />

      <Routes>
        {/* login and signup routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<Trip />} />
        <Route path="/trips/:id" element={<TripDetails />} />
        {/* Future */}
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/about" element={<About />} />

        {/* agent */}

        <Route path="/agent/dashboard" element={<TravelAgentDashboard />} />
        <Route path="/agent/bookings" element={<AgentActiveBookings />} />
        <Route path="/agent/trips" element={<AgentTrips />} />
        <Route path="/agent/customers" element={<AgentCustomers />} />
        <Route path="/agent/revenue" element={<AgentRevenue />} />
        <Route path="/agent/CreateNewTrip" element={<CreateNewTrip />} />
        <Route path="/agent/profile" element={<AgentProfile />} />
        <Route path="/agent/trips/edit/:id" element={<EditTrip />} />
        <Route
          path="/agent/trips/view/:tripId"
          element={<ViewTripBookings />}
        />
        <Route path="/agent/bookings/:bookingId" element={<BookingDetails />} />
        <Route path="/agent/refunds" element={<AgentRefunds />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
