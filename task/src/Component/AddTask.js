import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
const AddTask = () => {
  return (
<div className='container mx-5'>
<Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Task Tittle</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Task Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Task Description" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
</div>
  )
}

export default AddTask
