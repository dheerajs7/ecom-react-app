import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const List = () => {
  const [items,setItems]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:4001/api/getData')
    .then((res)=>res.json())
    .then((data)=>setItems(data))
    .catch((error)=>console.log(error));
  },[]);

  const deletedata=(id)=>{
    fetch(`http://localhost:4001/api/deleteData/${id}`,{method:'DELETE'})
    .then((res)=>res.json())
    .then((data)=>setItems(data))
    .catch((error)=>console.log(error));
  }

    return (
        <>
        <Link to ="/admin/category/list">Add</Link>
       <table>
           <tr>
            <th style={{margin:"10px"}}>Title</th>
            <th style={{margin:"10px"}}>Description</th>
            <th style={{margin:"10px"}}>Thumbnail</th>
            <th style={{margin:"10px"}}>Delete</th>
           </tr>
           {items.map((item)=>
           <tr key={item._id}>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td><img alt ="not found" src={item.thumbnail} height="50"/></td>
            <td><button onClick ={()=>deletedata(item.id)}>Delete</button></td>
           </tr>
           )}
       </table>
</>       
    )
}

export default List;
