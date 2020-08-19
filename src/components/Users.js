import React, { useState, useEffect } from "react";
import "http";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div className="app__users">
      <ul>
        {users.map((json) => (
          <li key={json.id}>{json.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
