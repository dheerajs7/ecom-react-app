// src/components/Wishlist.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      product_name: 'Iphone 15',
      price: 999,
      image: 'iphone.jpg',
    },
    {
      id: 2,
      product_name: 'Petreon EarBuds',
      price: 59,
      image: 'blk.avif',
    },
  ]);

  const handleRemoveFromWishlist = (productId) => {
    setWishlistItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const handleViewDetails = (product) => {
    alert(`Viewing details for ${product.product_name}`);
    // Implement navigation to product details page
  };

  return (
    <Container>
      <h1>Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty</p>
      ) : (
        <Row>
          {wishlistItems.map(item => (
            <Col key={item.id} md={6} lg={4} className="mb-3">
              <Card>
                <Card.Img variant="top" src={process.env.PUBLIC_URL + item.image}
                style={{ width: '350px', height: '400px' }} />
                <Card.Body>
                  <Card.Title>{item.product_name}</Card.Title>
                  <Card.Text>${item.price}</Card.Text>
                  <Button variant="primary" onClick={() => handleViewDetails(item)}>
                    View Details
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveFromWishlist(item.id)}
                    style={{ marginLeft: '10px' }}
                  >
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Wishlist;
