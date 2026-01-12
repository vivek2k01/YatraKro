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
    if (formData.persons < 5) {
      setFormData({ ...formData, persons: formData.persons + 1 });
    }
  };

  const decreasePersons = () => {
    if (formData.persons > 1) {
      setFormData({ ...formData, persons: formData.persons - 1 });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (age < 18) {
      alert("Only 18+ travellers can book this trip");
      return;
    }
    console.log("Booking Data:", { ...formData, age, totalPrice });
    alert("Booking Successful 🎉");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-2">
      <div className="bg-white rounded-xl w-full max-w-md shadow-xl max-h-[90vh] overflow-y-auto">
        {/* HEADER */}
        <div className="px-4 py-3 border-b">
          <h2 className="travel-heading text-lg sm:text-xl font-bold text-blue-700 text-center">
            Complete Your Booking
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-3 text-sm">
          {/* NAME */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              onChange={handleChange}
              className="border rounded-md px-3 py-2 text-sm font-medium text-gray-700"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              onChange={handleChange}
              className="border rounded-md px-3 py-2 text-sm font-medium text-gray-700"
            />
          </div>

          {/* ADDRESS */}
          <input
            type="text"
            name="address"
            placeholder="Address"
            required
            onChange={handleChange}
            className="border rounded-md px-3 py-2 text-sm w-full font-medium text-gray-700"
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
            className="border rounded-md px-3 py-2 text-sm w-full font-medium text-gray-700"
          />

          {/* PHONE */}
          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            required
            onChange={handleChange}
            className="border rounded-md px-3 py-2 text-sm w-full font-medium text-gray-700"
          />

          {/* DOB + AGE */}
          <div className="grid grid-cols-2 gap-2">
            <input
              type="date"
              name="dob"
              required
              onChange={handleChange}
              className="border rounded-md px-3 py-2 text-sm font-medium text-gray-700"
            />
            <input
              type="text"
              value={age ? `${age} yrs` : ""}
              readOnly
              placeholder="Age"
              className="border rounded-md px-3 py-2 text-sm bg-gray-100"
            />
          </div>

          {/* PERSONS + / - */}
          <div className="grid grid-cols-2 gap-4">
            {/* PERSONS */}
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">Persons</p>
              <div className="flex items-center justify-between border rounded-lg px-4 py-3">
                <button
                  type="button"
                  onClick={decreasePersons}
                  className="text-xl font-bold text-blue-600"
                >
                  −
                </button>

                <span className="text-lg font-semibold">
                  {formData.persons}
                </span>

                <button
                  type="button"
                  onClick={increasePersons}
                  className="text-xl font-bold text-blue-600"
                >
                  +
                </button>
              </div>
            </div>

            {/* TOTAL PRICE */}
            <div>
              <p className="text-sm text-gray-700 mb-1">Total</p>
              <div className="flex items-center justify-center border rounded-lg px-4 py-3 bg-gray-50">
                <span className="travel-heading text-lg font-bold text-blue-700">
                  ₹{totalPrice}
                </span>
              </div>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-2.5 rounded-md text-sm font-semibold hover:bg-blue-700"
            >
              Book
            </button>

            <button
              type="button"
              onClick={onClose}
              className="flex-1 border py-2.5 rounded-md text-sm hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
