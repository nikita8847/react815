import React, { useState } from "react";
import axios from "axios";
import { Form, Pagination, Table } from "react-bootstrap";
import { paginate, sorting } from "../../common/utils";
import { useLocation } from "react-router-dom";
import "./students.css";

let allStudents = null;

function Students() {
  const { search } = useLocation();
  const searchObject = new URLSearchParams(search);
  const [students, setStudents] = useState(null);
  const [currentPage, setCurrentPage] = useState(3);
  const [pageSize, setPageSize] = useState(
    parseInt(searchObject.get("pageSize")) || 10,
  );
  const [sortBy, setSortBy] = useState(searchObject.get("sortBy") || "id");
  const [sortOrder, setSortOrder] = useState(
    +searchObject.get("sortOrder") || 1,
  );
  const [sortDataType, setSortDataType] = useState("number");

  const totalLinks = students && Math.ceil(students.length / pageSize);
  const linksArray = [...Array(totalLinks).keys()];

  React.useEffect(() => {
    axios("https://6219cf0581d4074e85b1f64b.mockapi.io/students").then(res => {
      setStudents(res.data);
      allStudents = res.data;
    });
  }, []);

  let sortedStudents =
    students && sorting(students, sortBy, sortDataType, sortOrder);
  let paginatedStudents =
    students && paginate(sortedStudents, currentPage, pageSize);
  const handlePageChange = e => {
    setCurrentPage(0);
    setPageSize(Number(e.target.value));
  };

  const handleSort = (col, type) => {
    if (!(sortBy == col)) {
      setSortOrder(1);
      setSortBy(col);
      setSortDataType(type);
    } else {
      setSortOrder(sortOrder == 1 ? -1 : 1);
      setSortBy(col);
      setSortDataType(type);
    }
  };
  return (
    <div>
      <div className="pagination-wrapper d-flex justify-content-center">
        <Pagination>
          {linksArray?.map(link => (
            <Pagination.Item
              onClick={() => setCurrentPage(link)}
              active={link === currentPage ? true : false}
              key={link}>
              {link + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
      <Form.Select onChange={handlePageChange}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
      </Form.Select>
      <Form.Group>
        <Form.Control type="text" placeholder="Search the students.." />
      </Form.Group>
      <Table className="students-table" striped variant="dark">
        <thead>
          <tr>
            <th onClick={() => handleSort("id", "number")}>ID</th>
            <th onClick={() => handleSort("name", "string")}>NAME</th>
            <th onClick={() => handleSort("email", "string")}>EMAIL</th>
            <th onClick={() => handleSort("parents_salary", "number")}>
              Parents Salary
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedStudents?.map(stu => (
            <tr key={stu.id}>
              <td>{stu.id}</td>
              <td>{stu.name}</td>
              <td>{stu.email}</td>
              <td>{stu.parents_salary}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Students;
