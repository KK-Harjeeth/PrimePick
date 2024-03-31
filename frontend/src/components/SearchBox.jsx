import React from 'react'
import { useState } from 'react'
import { Form,Button } from 'react-bootstrap'
import { useParams,useNavigate } from 'react-router-dom'
import {Col} from 'react-bootstrap'
const SearchBox = () => {
    const navigate=useNavigate();
    const {keyword:urlKeyword}=useParams();
    const [keyword,setKeyword]=useState(urlKeyword || '');
    const submitHandler=(e)=>{
        e.preventDefault();
        if(keyword.trim()){
            navigate(`/search/${keyword}`);
        }else{
            navigate('/'); 
        }
    }

  return (
    <Form onSubmit={submitHandler} className='d-flex justify-content-center'>
        {/* <Form.Control type='text' name='q' onChange={(e)=>setKeyword(e.target.value)} value={keyword} placeholder='Search Products....' className='mr-sm-2 ml-sm-5' style={{ width: '900px' }}></Form.Control> */}
        <Col xs={12} sm={8} md={6} lg={4} xl={3} className="mr-sm-2 ml-sm-5" style={{ width: '900px' }}>
                <Form.Control
                    type='text'
                    name='q'
                    onChange={(e) => setKeyword(e.target.value)}
                    value={keyword}
                    placeholder='Search Products....'
                />
            </Col>
        <Button type='submit' variant='outline-light' className='p-2 mx-2'>Search</Button>
    </Form>
  )
}

export default SearchBox;