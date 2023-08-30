import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

export default function ItemListContainer  () {
    const [items, setItems] = useState ([]) 
    const { id } = useParams()
    
    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch('/data/products.json')
            const products = await response.json()
            const filterProducts =  products.filter(product => product.category === id)
            if (filterProducts.length > 0) return setItems(filterProducts)
            setItems(products)
        }
        getProducts()
    }, [id])
    return(
        <Container fluid className='mt-4'>
            <Row>
                {items.map(item => (
                    <Col key={item.id} lg={2} clasname='mb-4'>
                        <Card>
                            <Card.Body>
                                <Card.Img variant='top' src={item.img} />
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                                <Button variant='dark' to={`/item/${item.id} `}>View More</Button>
                                </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
