import React from "react";
import { Link } from "react-router";

//Optional Segment.

function UserList() {
  const userData = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Skyy" },
    { id: 4, name: "Emma" },
    { id: 5, name: "Sarah" },
    { id: 6, name: "David" },
    { id: 7, name: "Olivia" },
    { id: 8, name: "Sophia" },
    { id: 9, name: "Liam" },
    { id: 10, name: "Noah" },
  ];
  return (
    <div style={{ marginLeft: "20px" }}>
      <h1>User_List with ID📃</h1>
      {userData.map((user) => (
        <div key={user.id}>
          <h3>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </h3>
        </div>
      ))}
      <h1>User_List with NAME📃</h1>
      {userData.map((user) => (
        <div key={user.id}>
          <h3>
            <Link to={`/users/${user.id}/${user.name}`}>
              {user.id}: {user.name}
            </Link>
          </h3>
        </div>
      ))}
    </div>
  );
}

export default UserList;
