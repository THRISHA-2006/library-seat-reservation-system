import React from "react";

function Dashboard({ seats, timeSlot }) {
  let available = 0;
  let reserved = 0;
  let booked = 0;

  seats.forEach((seat) => {
    const current = seat[timeSlot];
    if (current.status === "available") available++;
    else if (current.status === "reserved") reserved++;
    else if (current.status === "booked") booked++;
  });

  return (
    <div className="dashboard">
      <h3>📊 Booking Stats ({timeSlot.toUpperCase()})</h3>
      <p>🟢 Available: {available}</p>
      <p>🟠 Reserved: {reserved}</p>
      <p>🔴 Booked: {booked}</p>
    </div>
  );
}

export default Dashboard;