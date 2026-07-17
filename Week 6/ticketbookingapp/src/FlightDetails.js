function FlightDetails() {
  return (
    <div className="card">
      <h3>Flight Details</h3>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Fare</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI-202</td>
            <td>Chennai</td>
            <td>Delhi</td>
            <td>₹5500</td>
          </tr>

          <tr>
            <td>6E-101</td>
            <td>Bangalore</td>
            <td>Mumbai</td>
            <td>₹4300</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FlightDetails;