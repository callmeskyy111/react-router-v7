import React from "react";
import { Link, useParams } from "react-router";

function UserDetails() {
  const paramsData = useParams();
  console.log(`Params: ${paramsData.id}`);
  return (
    <div style={{ marginLeft: "20px" }}>
      <h1>User Details 👤</h1>
      <h2>UserId: {paramsData.id}</h2>
      <h3>
        <Link to="/users">Back</Link>
      </h3>
    </div>
  );
}

export default UserDetails;
