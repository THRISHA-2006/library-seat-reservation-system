import React from "react";
import Seat from "./Seat";

function SeatGrid({ seats, handleSeatClick, timeSlot }) {
  return (
    <div className="grid">
      {seats.map((seat, index) => (
        <Seat
          key={index}
          seat={seat}
          index={index}
          timeSlot={timeSlot}
          onClick={handleSeatClick}
        />
      ))}
    </div>
  );
}

export default SeatGrid;