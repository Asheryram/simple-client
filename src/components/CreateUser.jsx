import axios from "axios";
import React from "react";
import { useState } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import {toast} from "react-toastify"
const CreateUser = () => {
  const createUserUrl = "http://localhost:4000/v1/user/all";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    const payload = {
      name: name,
      email: email,
      country: country,
      city: city,
    };

    try {
      const res = await axios.post(createUserUrl, payload);
      if (res.data?.status === "OK") {
        alert("User Created Successfully");
        setName("");
        setEmail("");
        setCountry("");
        setCity("");
        toast.success('User has been created!',{
            theme: "dark"
          })
      }
    } catch (error) {
        toast.warn('Please fill in all the fields',{
            theme: "dark"
          })
    }
  };

  return (
    <Container>
      <Row>
        <Col lg={6}>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Country"
                onChange={(e) => setCountry(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter City"
                onChange={(e) => setCountry(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={submitForm}>
              Add User
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateUser;
