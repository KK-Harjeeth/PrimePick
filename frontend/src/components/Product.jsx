import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
      <Card
        className='my-3 p-3 rounded'
        style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Card.Img src={product.image} variant='top' />

        <Card.Body>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>

          <Card.Text as='div'>
            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
          </Card.Text>

          <Card.Text as="h3">
            ${product.price}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default Product;
