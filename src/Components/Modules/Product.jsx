import React, { useEffect, useState } from 'react'

const Product = ({title}) => {
  const[items, setItems]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:4001/api/getData')
    .then((res)=>res.json())
    .then((data)=>setItems(data))
    .catch((error)=>console.log(error));
  },[]);

    return (
        <>
       <table>
           <tr>
            <th style={{margin:"10px"}}>Title</th>
            <th style={{margin:"10px"}}>Description</th>
            <th style={{margin:"10px"}}>Thumbnail</th>
           </tr>
           {items.map((item)=>
           <tr key={item._id}>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td><img alt ="not found" src={item.thumbnail} height="50"/></td>
           </tr>
           )}
       </table>
</>       
    )

}

export default Product       
       

