import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { http } from "../config/axiosConfig";

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  useEffect(() => {
    http("/dashboard").then(res => setDashboardData(res.data));
  }, []);
  console.log(dashboardData);

  return (
    <div>
      <Container>
        <Row>
          <Col lg={3} xs={12}>
            Transaction - {dashboardData?.transactions}
          </Col>
          <Col lg={3} xs={12}>
            Products- {dashboardData?.products}
          </Col>
          <Col lg={3} xs={12}>
            Users - {dashboardData?.users}
          </Col>
          <Col lg={3} xs={12}>
            Categories - {dashboardData?.categories}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
