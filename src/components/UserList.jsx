import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Row } from "react-bootstrap";

const UserList = () => {
  const getAllUsersUrl = "http://localhost:4000/v1/user/all";
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(getAllUsersUrl);
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const renderedUsers = users.map((user) => (
    <Col lg={4} key={user.id}>
      {" "}
      {/* Use a unique key for each element in the map */}
      <Card>
        <Card.Body>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
          <p>
            {user.country} , {user.city}
          </p>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <>
      <h3 className="text-center">Users</h3>
      <Row className="d-flex flex-row flex-wrap g-4 justify-content-evenly">
        {renderedUsers}
      </Row>
    </>
  );
};

export default UserList;
