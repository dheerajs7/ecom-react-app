import React, { useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'

const Product = () => {
  const[items, setItems]=useState([
    {
        id:1,
        product_name:"Iphone 15",
        price:"699",
        image:"iphone.jpg",
    },
    {
        id:2,
        product_name:"Patreon Earbuds",
        price:"59",
        image:"blk.avif",
    },
  ])
    return (
        <>
        <Container className="row">
            {items.map((elem)=>{
                return<Card key={elem.id} className='col-md-6 mt-4 mx-3' style={{ width: '23rem' }}>
                    <Card.Img varient="top" src ={process.env.PUBLIC_URL +elem.image}
                        style={{ width: '350px', height: '400px' }}
                    />
                    <Card.Body>
                        <Card.Title>{elem.product_name}</Card.Title>
                        <Card.Text>${elem.price}</Card.Text>
                        <Button variant="primary"  >Buy Now</Button>

                        <Button variant="primary" style={{ marginLeft: '10px' }}>Add To Cart</Button>
                    </Card.Body>
                </Card>
            })}
        </Container>
    {/* <div>Product</div> */}
</>
  )
}

export default Product