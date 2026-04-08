import React from "react";

function Filters({ setTimeSlot }) {
  return (
    <div className="filters">
      <label className="slot-label">Select Slot: </label>
      <select onChange={(e) => setTimeSlot(e.target.value)}>
        <option value="morning">Morning</option>
        <option value="afternoon">Afternoon</option>
        <option value="evening">Evening</option>
      </select>
    </div>
  );
}

export default Filters;