import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import {
  addUser,
  findUsers,
  getUser,
  listUsers,
} from "./api/usersApiFirebaseV9";

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
      const second = await findUsers("myemail@gmail.com");
      console.log("second", second);
      // const user = await addUser({
      //   email: "myemail@gmail.com",
      // });
      // console.log("user added", user);
    })();
  }, []);

  return (
    <div className="App">
      <button onClick={fetchUsers}>Fetch</button>
    </div>
  );
}

export default App;
