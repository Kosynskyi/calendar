import React from "react";

const InputCalendar = () => {
  const addLeadingZero = (value) => {
    return String(value).padStart(2, "0");
  };

  const date = new Date();
  const day = addLeadingZero(date.getDate());
  const month = addLeadingZero(date.getMonth() + 1);
  const year = addLeadingZero(date.getFullYear());
  //   console.log(year, month, day);
  return (
    <>
      <label>
        Date:
        <input
          type="date"
          id="start"
          name="trip-start"
          value={`${year}-${month}-${day}`}
          min="1970-01-01"
        />
      </label>
    </>
  );
};

export default InputCalendar;
