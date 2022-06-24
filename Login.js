import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, SignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
     
    
       <div className='container '> 
       
        <div className="p-3 box" >
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email address"
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

            <div className="d-grid gap-2">
              <Button variant="primary" type="Submit">
                Log In
              </Button>
            </div>
            <br></br>
            <div class="row mb-4">
              <div class="col d-flex justify-content-center">

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                  <label class="form-check-label" for="form2Example31"> Remember me </label>
                </div>
              </div>


              <div class="col">
                <a href="#!">Forgot password?</a>
              </div>
            </div>
          </Form>

        </div>
        <div className="p-4 box mt-3 text-center">
          New User? <br></br><Link to="/signup"> <Button variant="primary" type="Submit">
            create anaccount
          </Button></Link>
        </div>
      
      </div>
      
      
   )
 }
export default Login;
