import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {
      setUsers(result.data);
    });
  });

  return (
    <div className="App">
      {users?.map((el) => (
        <>
          <h1>{el.name}</h1>
          <h2>{el.username}</h2>
          <h3>{el.email}</h3>
        </>
      ))}
    </div>
  );
}

export default App;
