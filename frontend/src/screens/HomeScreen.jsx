import {Row,Col} from 'react-bootstrap'; 
import React from 'react'
import Product from '../components/Product';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';
const HomeScreen = () => 
{
  const {data:products,isLoading,error}=useGetProductsQuery();
  return (
    <>
    { isLoading? (
      <Loader/>
    ) : error ? (<Message variant='danger'>{error?.data.message || error.error}</Message>) : (
      <>
      <h1>Latest Products</h1> 
      <Row>
          {products.map((product)=>(
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>  
                {/* These props (sm, md, lg, xl) are used to make the website responsive by adjusting the layout based on the screen size of the device viewing the website. */}
                  <Product product={product}></Product>
              </Col>
          ))}
      </Row>
      </>
    ) } 
      
    </>
  );
};

export default HomeScreen; 
