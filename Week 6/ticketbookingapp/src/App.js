import React, { useState } from "react";
import FlightDetails from "./FlightDetails";
import "./App.css";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="container">

      <h1>Ticket Booking App</h1>

      {!loggedIn ? (
        <button onClick={() => setLoggedIn(true)}>
          Login
        </button>
      ) : (
        <>
          <h2>Welcome User</h2>

          <FlightDetails />

          <button onClick={() => alert("Ticket Booked Successfully!")}>
            Book Ticket
          </button>

          <br /><br />

          <button onClick={() => setLoggedIn(false)}>
            Logout
          </button>
        </>
      )}

    </div>
  );
}

export default App;