import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
function AddUser() {
  const[users,setUser]=useState({
      name:"",
      age:" ",
      email:" ",

  })

    return ( <>
    <form action="action_page.php">
  <div class="container">
    <h1>ADD USER</h1>
    <p>Please fill in this form to create an account.</p>
    <hr></hr>

    <label for="    name"><b>Name</b></label>
    <input type="text" placeholder="Enter Name" name="email" value={name} id="email" required />
    <br></br>
    <label for="number"><b>Age</b></label>
    <input type="number" placeholder="Enter age" name="psw"  value={Age} id="psw" required/>
    <br></br>
    <label for="Number"><b>ID</b></label>
    <input type="number" placeholder="Id" name="psw-repeat"  value={ID}id="psw-repeat" required/>
    <hr/>
    <br></br>
    <p>By creating an account you agree to our <NavLink>Terms & Privacy</NavLink>.</p>
    <button type="submit" class="registerbtn">Register</button>
  </div>

  <div class="container signin">
    <p>Already have an account? <NavLink>Sign in</NavLink>.</p>
  </div>
</form>
    
    
    </> );
}

export default AddUser;