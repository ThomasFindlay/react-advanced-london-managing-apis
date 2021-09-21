import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getUser, listUsers } from "./api/usersApi";

function App() {
  const [users, setUsers] = useState([]);
  const abortRef = useRef(null);

  const fetchUsers = async () => {
    try {
      console.log("abort?", abortRef.current);
      // abortRef.current?.();
      const response = await listUsers({
        abort: abort => {
          abortRef.current = abort;
        },
      });
      console.log(response);
      setUsers(response);
    } catch (error) {
      console.log("err", error.message, Object.keys(error));
      console.error(error);
    }
  };
  useEffect(() => {
    fetchUsers();

    (async () => {
      const result = await getUser("u1WmOvm6MgQO5H0PbHPv");
      console.log("user", result);
    })();
  }, []);

  return (
    <div className="App">
      <button onClick={fetchUsers}>Fetch</button>
    </div>
  );
}

export default App;
