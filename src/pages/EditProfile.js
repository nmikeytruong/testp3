import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import { Input, TextArea, FormBtn } from "../components/Form";

function EditProfile() {
    return (
      <div>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <h1>Welcome {}</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              
                {/* <Input
                  value={this.state.imageurl}
                  onChange={this.handleInputChange}
                  name="imageurl"
                  placeholder="Enter Image URL"
                /> */}
                <p><label for="imageurl">Image URL</label>
                <input type="string" class="form-control" id="imageurl-input" placeholder="Enter Image URL"></input></p>
                <p><label for="username">Username</label>
                <input type="string" class="form-control" id="username-input" placeholder="Enter username"></input></p>
                <p><label for="gender-text">Gender</label>
                    <select class="answer" id="gender-input">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select></p>
                <p><label for="looking-for-input">Looking For</label>
                    <select id="looking-for-input">
                      <option value="friendship">Friendship</option>
                      <option value="relationship">Relationship</option>
                    </select></p>
                <p><label for="interests-input">Interests</label>
                    <input type="text" id="interests-input" class="form-control" aria-describedby="interests-input"
                    placeholder="Enter Interests"></input></p>
                <p><label for="about-me-description">About Me</label>
                    <textarea class="form-control" id="about-me-description" aria-describedby="about-me-description"
                    placeholder="Enter About Yourself"></textarea></p>
              
  
              <FormBtn type="submit" id="edit-profile"> Update  </FormBtn>
              
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
  export default EditProfile;