import { useState } from "react";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  console.log(dispatch);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    date: "",
    time: "10:00",
    noOfGuests: 1,
    occasion: "Birthday",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDateChange = async (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    dispatch({ type: "UPDATE_TIMES", payload: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
  };

  const currentDate = new Date().toISOString().split("T")[0];
  const options = availableTimes.map((time) => (
    <option key={time}>{time}</option>
  ));

  return (
    <main>
      <p className="desc-text form-desc">
        Please fill in the form below accurately to enable us serve you nicely.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="seperate">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            value={formData.firstName}
            onChange={handleFormChange}
            required
          ></input>
        </div>
        <div className="seperate">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            value={formData.lastName}
            onChange={handleFormChange}
            required
          ></input>
        </div>
        <div className="seperate">
          <label htmlFor="contact-number">Contact Number</label>
          <input
            type="text"
            id="contact-number"
            name="contactNumber"
            placeholder="123-456-7890"
            value={formData.contactNumber}
            onChange={handleFormChange}
            pattern="[0-9{3}-[0-9]{3}-[0-9]{4}"
          ></input>
        </div>
        <div className="seperate date-time">
          <div className="seperate-child">
            <label htmlFor="res-date">Choose date</label>
            <input
              type="date"
              id="res-date"
              name="date"
              value={formData.date}
              onChange={handleDateChange}
              required
              min={currentDate}
            />
          </div>
          <div className="seperate-child">
            <label htmlFor="res-time">Choose time</label>
            <select
              id="res-time"
              name="time"
              value={formData.time}
              onChange={handleFormChange}
              required
            >
              {options}
            </select>
          </div>
        </div>
        <div className="seperate guests-occasion">
          <div className="seperate-child">
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              required
              id="guests"
              name="noOfGuests"
              value={formData.noOfGuests}
              onChange={handleFormChange}
            ></input>
          </div>
          <div className="seperate-child">
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              name="occasion"
              value={formData.occasion}
              onChange={handleFormChange}
              required
            >
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Engagement</option>
            </select>
          </div>
        </div>
      </form>
    </main>
  );
};

export default BookingForm;
