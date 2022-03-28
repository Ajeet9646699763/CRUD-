import React ,{ useState,useEffect} from 'react';
import axios from 'axios';
import './Home.css'
import {NavLink}  from  'react-router-dom'
function Home() {
    const [users,setUser]=useState([]);

    useEffect(()=>{
        //console.log("hello");
        loadusers();
    },[]);
async function loadusers(){
    const result= await axios.get('http://localhost:3003/employee');
    console.log(result.data);
    setUser(result.data)
}


async function deleteUser(id){
 await axios.delete(`http://localhost:3003/employee/${id}`);
 loadusers();
}






    return ( <><h1>Home Page</h1>
    
    <div className='table'>
    <table>
        <thead className=''>
  <tr>
    <th scope='col'>No.</th>
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
            <NavLink to={"/ViewUser/" + user.id}  className="btn btn-success">View</NavLink>
            <NavLink  to ="/" onClick={()=>deleteUser(user.id)} className="btn btn-danger">Delete</NavLink>
            <NavLink to={"/EditUser/" + user.id} className="btn btn-warning"> Edit</NavLink>
        </tr>
    
    ))

}
</tbody>
</table>
</div>
    </> );
}

export default Home;