import React from "react";
import officeImage from "./office.jpg";

function App() {

  const office = {
    Name: "Skyline Business Center",
    Rent: 55000,
    Address: "MG Road, Bangalore"
  };

  const officeList = [
    {
      Name: "Skyline Business Center",
      Rent: 55000,
      Address: "MG Road, Bangalore"
    },
    {
      Name: "Tech Park Office",
      Rent: 75000,
      Address: "HITECH City, Hyderabad"
    },
    {
      Name: "Corporate Hub",
      Rent: 45000,
      Address: "T Nagar, Chennai"
    }
  ];

  return (
    <div style={{ margin: "20px" }}>

      <h1>Office Space Rental App</h1>

      <img
        src={officeImage}
        alt="Office Space"
        width="500"
        height="300"
      />

      <h2>Featured Office</h2>

      <p><b>Name:</b> {office.Name}</p>

      <p>
        <b>Rent:</b>{" "}
        <span
          style={{
            color: office.Rent < 60000 ? "red" : "green"
          }}
        >
          Rs. {office.Rent}
        </span>
      </p>

      <p><b>Address:</b> {office.Address}</p>

      <hr />

      <h2>Available Office Spaces</h2>

      {
        officeList.map((item, index) => (

          <div
            key={index}
            style={{
              border: "1px solid gray",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "8px"
            }}
          >

            <h3>{item.Name}</h3>

            <p>
              <b>Rent:</b>{" "}
              <span
                style={{
                  color: item.Rent < 60000 ? "red" : "green"
                }}
              >
                Rs. {item.Rent}
              </span>
            </p>

            <p>
              <b>Address:</b> {item.Address}
            </p>

          </div>

        ))
      }

    </div>
  );
}

export default App;