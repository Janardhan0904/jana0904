import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {
  const[firstname,setfirstname] =useState("");
  const[lastname,setlastname] = useState("");
  const[username,setusername]=useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const[conformPassword,setcomformPassword] =useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return ( 
    <div>
      <div className="p-4 box">
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicFirstname">
            <Form.Control
              type="Firstname"
              placeholder="firstname"
              onChange={(e) => setfirstname(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLasttname">
            <Form.Control
              type="lasttname"
              placeholder="lastname"
              onChange={(e) => setlastname(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Control
              type="username"
              placeholder="username "
              onChange={(e) => setusername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email "
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicConformPassword">
            <Form.Control
              type="conformpassword"
              placeholder="conformPassword"
              onChange={(e) => setcomformPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Log In</Link>
      </div>
    </div>
  );
};

export default Signup;
