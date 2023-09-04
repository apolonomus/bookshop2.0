import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card'

import Placeholder from 'react-bootstrap/Placeholder';
import Button from 'react-bootstrap/Button'



export default function ItemDetail({ detail }) {
  return (

    <div className="d-flex justify-content-around">
      <Card border='dark' style={{ width: '18rem' }}>
          <Card.Img variant='top' src={detail.img} />
          <Card.Body>
            <Card.Title>{detail.name}</Card.Title>
            <p>{detail.category}</p>
            <p>{detail.description}</p>
            <Button variant='dark'>Price $ {detail.price}</Button>
          </Card.Body>
      </Card>
    </div>
  )
}
