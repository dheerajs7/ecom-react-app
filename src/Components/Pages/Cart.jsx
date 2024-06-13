// src/components/Cart.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      product_name: 'I Phone 15',
      price: 699,
      quantity: 1,
      image: 'iphone.jpg',
    },
    {
      id: 2,
      product_name: 'Patreon Earbuds',
      price: 59,
      quantity: 2,
      image: 'airpods.jpg',
    },
  ]);

  const handleQuantityChange = (productId, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const handleCheckout = () => {
    alert('Proceeding to checkout...');
    // Implement checkout logic here
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <Container>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <Row>
            {cartItems.map(item => (
              <Col key={item.id} md={12}>
                <Card className="mb-3">
                  <Row className="no-gutters">
                    <Col md={4}>
                      <Card.Img variant="top" src={process.env.PUBLIC_URL + item.image} />
                    </Col>
                    <Col md={8}>
                      <Card.Body>
                        <Card.Title>{item.product_name}</Card.Title>
                        <Card.Text>${item.price}</Card.Text>
                        <Form.Control
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            handleQuantityChange(item.id, parseInt(e.target.value))
                          }
                          min="1"
                        />
                         <Button
                          variant="success"
                          // onClick={() => buyItem(item.id)}
                          style={{ marginTop: '10px', }}
                        >
                          Buy
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => handleRemoveItem(item.id)}
                          style={{ marginTop: '10px',  marginLeft:"5px" }}
                        >
                          Remove
                        </Button>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="d-flex justify-content-between align-items-center">
            <h2>Total: ${calculateTotal()}</h2>
            <Button variant="success" onClick={handleCheckout}>
              Proceed to Checkout
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default Cart;
