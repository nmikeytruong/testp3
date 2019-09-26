import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Login() {
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
                <p><label for="Password1">Password</label>
                <input type="password" class="form-control" id="Password" placeholder="Password"></input></p>
                <button type="submit" id="submit-login" class="btn btn-primary btn-lg btn-block">Login</button>
                <p>or <a href="/register">Register</a></p>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
