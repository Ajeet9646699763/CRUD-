import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import './AddUser.css';
function AddUser() {
  let History = useHistory();
  const [users, setUser] = useState({
    name: "",
    age: " ",
    email: " ",
    id: " ",
  });
  const { name, age, email, id } = users;
  async function handlerSubmit(e) {
    e.preventDefault();
    await axios.post("http://localhost:3003/employee", users);
    History.push("/");
    //console.log(e)
  }
  function onInputChange(e) {
    console.log(e.target.value);
    setUser({ ...users, [e.target.name]: e.target.value });
  }
  return (
    <>
      <form onSubmit={handlerSubmit}>
        <div className="container">
          <h1>ADD USER</h1>
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
            <b>Email</b>
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
          <button type="submit" className="btn btn-info">
            Register User
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

export default AddUser;
