import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'

import Button from 'react-bootstrap/Button'


export default function ItemDetail({ detail }) {
  return (
    <Container fluid className='mt-4'>
        <Card border='dark' style={{ width: '18rem' }}>
            <Card.Img variant='top' src={detail.img} />
            <Card.Body>
              <Card.Title>{detail.name}</Card.Title>
              <p>{detail.category}</p>
              <p>{detail.description}</p>
              <Button variant='dark'>Price $ {detail.price}</Button>
            </Card.Body>
        </Card>
    </Container>
  )
}
