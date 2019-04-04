import React, { useEffect, useState } from "react";
import withAuth from "../auth/withAuth";
import axios from "axios";

function Users(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/users")
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Hey there from users</h1>
      {users.map(user => (
        <li key={user.id}>{user.username}</li>
      ))}
    </div>
  );
}

export default withAuth(Users);
