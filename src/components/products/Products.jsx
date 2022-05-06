import React, { useEffect, useState } from "react";
import { Table, Button, Pagination } from "react-bootstrap";
import { http } from "../../config/axiosConfig";
import queryString from "query-string";
import swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const navigator = useNavigate();
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
  }, [query, refresh]);

  const handleDelete = id => {
    swal
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete!",
      })
      .then(result => {
        if (result.isConfirmed) {
          http
            .delete(`products/${id}`)
            .then(res => {
              if (res.status == 200) {
                setRefresh(!refresh);
              }
            })
            .catch(err => {
              swal.fire("Oops", "Something went wrong", "error");
            });
        }
      });
  };

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
                <Button
                  onClick={() => navigator(`new/${pro._id}`)}
                  variant="secondary">
                  Edit
                </Button>
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
