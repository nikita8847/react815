import React from "react";
import { Col, Row } from "react-bootstrap";
import Login from "../components/login/Login";

function LoginScreen() {
  return (
    <div>
      <Row>
        <Col xs={12} lg={8}>
          <img
            style={{ width: "100%" }}
            src="https://picsum.photos/1000"
            alt=""
          />
        </Col>
        <Col className="p-5 " xs={12} lg={4}>
          <Login />
        </Col>
      </Row>
    </div>
  );
}

export default LoginScreen;
