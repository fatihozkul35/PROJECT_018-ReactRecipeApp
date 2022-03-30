import React from "react";
import { Button, Form, Input } from "../login/LoginStyles";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();

    console.log("handleRegister calıstı");
  };
  return (
    <div>
      <h1>Register page</h1>
      <Form>
        <Input type="text" placeholder="Enter your firsname" />
        <Input type="text" placeholder="Enter your lastname" />
        <Input type="email" placeholder="Enter your email" />
        <Input type="password" placeholder="Enter your password" />
        <Button type="submit" onClick={handleRegister}>
          SIGNIN
        </Button>
      </Form>
    </div>
  );
};

export default Register;
