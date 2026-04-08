import React from "react";

function Seat({ seat, index, onClick, timeSlot }) {
  const safeSlot = timeSlot || "morning";
  const current = seat?.[safeSlot] || {};
  const status = current.status || "available";

  const getSeatContent = () => {
    if (status === "booked") {
      return (
        <>
          <div>{index + 1}</div>
          <small>🕒 {safeSlot}</small>
        </>
      );
    }
    return index + 1;
  };

  const tooltip =
    status === "booked"
      ? `Seat ${index + 1} booked for ${safeSlot}`
      : "";

  return (
    <div
      className={`seat ${status}`}
      onClick={() => onClick(index)}
      title={tooltip}
    >
      {getSeatContent()}
    </div>
  );
}

export default Seat;