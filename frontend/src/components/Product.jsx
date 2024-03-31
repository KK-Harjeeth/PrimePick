import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className='my-3 p-3 rounded'
      style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        </Card.Text>

        <Card.Text as="h3">
          ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
