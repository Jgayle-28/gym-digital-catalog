import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ProductInfoCard = ({ product }) => {
  return (
    <Card className='my-3 p-2 rounded'>
      <Card.Img src={product.image} variant='top' />
      <Card.Body>
        <a href='#product'>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as='h3' className='my-3'>
          ${product.price}
        </Card.Text>
      </Card.Body>
      <Button className='d-block w-full'>View Product Info</Button>
    </Card>
  );
};

export default ProductInfoCard;
