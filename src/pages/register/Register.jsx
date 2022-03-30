import React, { useState } from "react";
import { Button, Form, Input } from "../login/LoginStyles";
import { signIn } from "../../auth/firebase";
const Register = () => {
  const [formRegister, setFormRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleFormRegister = () => {};

  const handleRegister = (e) => {
    e.preventDefault();
    signIn();
  };
  return (
    <div>
      <h1>Register page</h1>
      <Form>
        <Input
          type="text"
          name="firstName"
          placeholder="Enter your firsname"
          value={formRegister.firstName}
          onChange={handleFormRegister}
        />
        <Input
          type="text"
          name="lastName"
          placeholder="Enter your lastname"
          value={formRegister.lastName}
          onChange={handleFormRegister}
        />
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formRegister.email}
          onChange={handleFormRegister}
        />
        <Input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formRegister.password}
          onChange={handleFormRegister}
        />
        <Button type="submit" onClick={handleRegister}>
          SIGNIN
        </Button>
      </Form>
    </div>
  );
};

export default Register;
