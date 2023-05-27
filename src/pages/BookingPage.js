/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import { useReducer, useState } from "react";
import { fetchAPI, submitAPI } from "../Api";

const BookingPage = () => {
  const [date, setDate] = useState(new Date());

  function initializeTimes(date) {
    return fetchAPI(date);
  }

  function updateTimes(date) {
    const dateObj = new Date(date);
    return fetchAPI(dateObj);
  }

  const navigate = useNavigate();

  function submitForm(formData) {
    const isSubmitted = submitAPI(formData);

    if (isSubmitted) {
      navigate("/confirmed");
    }
  }

  function reducer(state, action) {
    let newState;
    switch (action.type) {
      case "UPDATE_TIMES":
        const newDate = new Date(action.payload);
        newState = updateTimes(newDate);
        break;

      default:
        throw new Error();
    }

    return newState;
  }

  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes(date));

  return (
    <BookingForm
      availableTimes={availableTimes}
      dispatch={dispatch}
      submitForm={submitForm}
    />
  );
};

export default BookingPage;
