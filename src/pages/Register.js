import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Register() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Social Match</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <form>
                <p><label for="Email">Email Address</label>
                <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email"></input></p>
                <p><label for="username">Username</label>
                <input type="string" class="form-control" id="username-input" placeholder="Enter username"></input></p>
                <p><label for="Password1">Password</label>
                <input type="password" class="form-control" id="Password" placeholder="Password"></input></p>
                <button type="submit" id="submit-register" class="btn btn-primary btn-lg btn-block">Regsiter</button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register;
