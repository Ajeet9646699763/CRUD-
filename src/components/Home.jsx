import React ,{ useState,useEffect} from 'react';
import axios from 'axios';
import './Home.css'
import {NavLink}  from  'react-router-dom'
function Home() {
    const [users,setUser]=useState([]);

    useEffect(()=>{
        console.log("hello");
        loadusers();
    },[]);
async function loadusers(){
    const result= await axios.get('http://localhost:3003/employee');
    console.log(result.data);
    setUser(result.data)
}

    return ( <><h1>Home Page</h1>
    
    <div className='table'>
    <table>
        <thead>
  <tr>
    <th scope='col'>ID</th>
    <th scope='col'>Name</th>
    <th scope='col'>Age</th>
    <th scope='col'>Actions</th>
  </tr>
  </thead>

<tbody>
{
 users.map((user,index)=>(
        <tr>
            <th>{index+1}</th>
            <th>{user.name}</th>
            <th>{user.age}</th>
            <NavLink to="*">View</NavLink>
            <NavLink to="*">Delete</NavLink>
            <NavLink to="*"> Edit</NavLink>
        </tr>
    
    ))

}
</tbody>
</table>
</div>
    </> );
}

export default Home;