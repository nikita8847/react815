import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { httpFile } from "../../config/axiosConfig";

function ProductForm() {
  const [formData, setFormData] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    let data = new FormData(e.target);
    httpFile.post("products", data);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control name="price" type="number" placeholder="Price" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Descriptions</Form.Label>
          <Form.Control
            name="description"
            type="text"
            placeholder="Description"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Upload</Form.Label>
          <Form.Control
            type="file"
            multiple
            name="images"
            placeholder="Description"
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Create Product
        </Button>
      </Form>
    </div>
  );
}

export default ProductForm;
