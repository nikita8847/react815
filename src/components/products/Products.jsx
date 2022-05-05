import React, { useEffect, useState } from "react";
import { Table, Button, Pagination } from "react-bootstrap";
import { http } from "../../config/axiosConfig";
import queryString from "query-string";

function Products() {
  const [products, setProducts] = useState(null);
  const [query, setQuery] = useState({
    limit: 20,
    page: 0,
    sortOrder: -1,
    sortBy: "price",
  });

  const [totalRecords, setTotalRecords] = useState(null);

  const linksArray = products && [
    ...Array(Math.ceil(totalRecords / query.limit)).keys(),
  ];

  useEffect(() => {
    http(`products?${queryString.stringify(query)}`)
      .then(res => {
        setProducts(res.data.result);
        setTotalRecords(res.data.totalRecords);
      })
      .catch(err => console.log(err.message));
  }, [query]);

  const handleDelete = id => {};

  return (
    <div>
      Products
      <Table variant="dark" striped hover>
        <thead>
          <tr>
            <th>Id</th>
            <th onClick={() => setQuery({ ...query, sortBy: "name" })}>Name</th>
            <th onClick={() => setQuery({ ...query, sortBy: "price" })}>
              Price
            </th>
            <th>In Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products?.map(pro => (
            <tr>
              <td>{pro._id}</td>
              <td>{pro.name}</td>
              <td>{pro.price}</td>
              <td>{pro.inStock ? "In Stock" : "Out of Stock"}</td>
              <td>
                <Button variant="secondary">Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(pro._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        {linksArray?.map((link, index) => {
          return (
            <Pagination.Item
              onClick={() => setQuery({ ...query, page: +link })}>
              {link + 1}
            </Pagination.Item>
          );
        })}
      </Pagination>
    </div>
  );
}

export default Products;
