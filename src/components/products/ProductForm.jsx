import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { httpFile, http } from "../../config/axiosConfig";
import { useParams } from "react-router-dom";

function ProductForm() {
  const ID = useParams().id;
  const [formData, setFormData] = useState(null);
  const [categories, setCategories] = useState(null);
  const [MODE, setMODE] = useState("CREATE");
  console.log("ID", ID);

  const handleSubmit = e => {
    e.preventDefault();
    let data = new FormData(e.target);
    if (MODE == "UPDATE") {
      httpFile.put(`products/${ID}`, formData);
    } else {
      httpFile.post("products", data);
    }
  };
  const handleFormChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    http(`products/${ID}`).then(res => {
      if (res.status == 200) {
        setFormData(res.data);
        setMODE("UPDATE");
      }
    });
    http("categories").then(res => setCategories(res.data.result));
  }, []);

  console.log("formData", formData);

  return (
    <div>
      <Form onSubmit={handleSubmit} onChange={handleFormChange}>
        <input type="hidden" name="_id" value={formData?._id} />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Name"
            value={formData?.name}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            type="number"
            placeholder="Price"
            value={formData?.price}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Descriptions</Form.Label>
          <Form.Control
            name="description"
            type="text"
            placeholder="Description"
            value={formData?.description}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Categories</Form.Label>
          <Form.Select name="category">
            {categories &&
              categories?.map(category => (
                <option
                  selected={category?._id == formData?.category?._id}
                  value={category?._id}>
                  {category?.name}
                </option>
              ))}
          </Form.Select>
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
