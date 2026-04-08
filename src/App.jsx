import React, { useState, useEffect } from "react";
import SeatGrid from "./components/SeatGrid";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Filters from "./components/Filters";
import Notification from "./components/Notification";
import "./App.css";

function App() {
  const [user, setUser] = useState("");
  const [notification, setNotification] = useState("");
  const [timeSlot, setTimeSlot] = useState("morning");
  const [darkMode, setDarkMode] = useState(false);

  const [seats, setSeats] = useState(
    Array.from({ length: 20 }, () => ({
      morning: { status: "available", user: null },
      afternoon: { status: "available", user: null },
      evening: { status: "available", user: null },
    }))
  );

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleSeatClick = (index) => {
    const updated = [...seats];
    const currentSeat = updated[index][timeSlot];

    if (currentSeat.status === "booked") {
      if (currentSeat.user === user) {
        const confirmCancel = window.confirm("Cancel your booking?");
        if (confirmCancel) {
          updated[index][timeSlot] = { status: "available", user: null };
          setSeats(updated);
          setNotification(`Seat ${index + 1} cancelled`);
        }
      } else {
        setNotification("❌ You can cancel only your own booking");
      }
      return;
    }

    if (currentSeat.status === "reserved") {
      setNotification(`Seat ${index + 1} already reserved`);
      return;
    }

    updated[index][timeSlot] = { status: "reserved", user: user };
    setSeats(updated);
    setNotification(`Seat ${index + 1} reserved`);
  };

  const confirmBooking = () => {
    const updated = seats.map((seat) => {
      const current = seat[timeSlot];
      if (current.status === "reserved" && current.user === user) {
        return {
          ...seat,
          [timeSlot]: { status: "booked", user: user },
        };
      }
      return seat;
    });
    setSeats(updated);
    setNotification(`Booking confirmed for ${timeSlot}`);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  if (!user) return <Login setUser={setUser} />;

  return (
    <div className={`container ${darkMode ? "dark" : ""}`}>
      <div className="header">
        <h1>📚 Smart Library</h1>
        <button onClick={toggleTheme}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <h3>Welcome, {user}</h3>
      <h3>Current Slot: {timeSlot.toUpperCase()}</h3>

      <Filters setTimeSlot={setTimeSlot} />

      <Dashboard seats={seats} timeSlot={timeSlot} />

      <button onClick={confirmBooking}>Confirm Booking</button>

      <SeatGrid
        seats={seats}
        handleSeatClick={handleSeatClick}
        timeSlot={timeSlot}
      />

      <Notification message={notification} />
    </div>
  );
}

export default App;