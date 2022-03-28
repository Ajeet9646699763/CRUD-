import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
function EditUser() {
  let History = useHistory();

  const { iD } = useParams();
  // alert (iD);
  const [users, setUser] = useState({
    name: "",
    age: " ",
    email: " ",
    id: " ",
  });

  useEffect(() => {
    loadusers();
  }, []);

  const { name, age, email, id } = users;
  async function handlerSubmit(e) {
    e.preventDefault();
    await axios.put("http://localhost:3003/employee/" + iD, users);
    History.push("/");
    //console.log(e)
  }

  async function loadusers() {
    const result = await axios.get("http://localhost:3003/employee/" + iD);
    console.log(result.data);
    setUser(result.data);
  }

  function onInputChange(e) {
    console.log(e.target.value);
    setUser({ ...users, [e.target.name]: e.target.value });
  }
  return (
    <>
      <form onSubmit={handlerSubmit}>
        <div className="container">
          <h1>Edit USER</h1>
          <p>Please fill in this form to create an account.</p>
          <hr></hr>
          <label htmlFor="Number">
            <b>ID</b>
          </label>
          <input
            type="number"
            placeholder="Id"
            name="id"
            id="id"
            value={id}
            onChange={(e) => onInputChange(e)}
            required
          />
          <br></br>
          <hr />
          <label htmlFor="name">
            <b>Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            id="name"
            value={name}
            onChange={(e) => onInputChange(e)}
            required
          />
          <br></br>
          <hr />
          <label htmlFor="number">
            <b>Age</b>
          </label>
          <input
            type="number"
            placeholder="Enter age"
            name="age"
            id="age"
            value={age}
            onChange={(e) => onInputChange(e)}
            required
          />
          <br></br>
          <hr />
          <label htmlFor="email">
            <b>Email </b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => onInputChange(e)}
            required
          />
          <br></br>
          <hr />
          <p>
            By creating an account you agree to our{" "}
            <NavLink to="*">Terms & Privacy</NavLink>.
          </p>
          <button type="submit" className="btn btn-primary">
            Edit User
          </button>
        </div>

        <div className="container signin">
          <p>
            Already have an account? <NavLink to="*">Sign in</NavLink>.
          </p>
        </div>
      </form>
    </>
  );
}

export default EditUser;
