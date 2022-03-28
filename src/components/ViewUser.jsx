import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
function ViewUser() {
  const [users, setUser] = useState({
    name: "",
    age: " ",
    email: " ",
    id: " ",
  });
  const { iD } = useParams();
  useEffect(() => {
    loadusers();
    
  }, []);
  async function loadusers() {
    const result = await axios.get("http://localhost:3003/employee/"+ iD );
    console.log(result.data);
    setUser(result.data);
  }

  return (
    <>
      <h1>User Id: {users.id}</h1>
      <ul>
        <li>name :{users.name}</li>
        <li>email:{users.email}</li>
        <li>age :{users.age}</li>
        <NavLink to="/"><button className="btn btn-primary">Back To Home</button></NavLink>
      </ul>
   
</>
  );
}

export default ViewUser;
