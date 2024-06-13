import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Contact = () => {
  return (
    <Card style={{ width: '35rem' }}>
    <Card.Img style={{ width: '50px', height: '60px' }} variant="top" src={'contact.png'}/>
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
      We’d love to hear from you! Whether you have a question about our services, 
      need assistance, or just want to provide feedback, our team is here to help.
      Get in Touch
     Customer Service:

      Phone: +1 (123) 456-7890
     Email: support@yourwebsite.com
     Business Hours:

Monday to Friday: 9:00 AM - 5:00 PM (EST)
Saturday: 10:00 AM - 2:00 PM (EST)
Sunday: Closed
Visit Us
Head Office:
123 Your Street, Suite 100
Your City, Your State, 12345
Country
      </Card.Text>
      <Button variant="primary">Contact Now</Button>
    </Card.Body>
  </Card>
  )
}

export default Contact