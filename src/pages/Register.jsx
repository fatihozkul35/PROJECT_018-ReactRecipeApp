import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { FormStyles, regisMain, styleImg } from "../styles/styles";
import signInImg from "../assets/meal2.svg";

const Register = () => {
  const [user, setUser] = useState({ firstName: "", lastName: "" });
  const handleUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div style={regisMain}>
      <h1>Recipe Project With Fatih</h1>
      <FormStyles spacing={5}>
        <img style={styleImg} src={signInImg} alt="here is a logo" />
        <TextField
          id="outlined-basic"
          name="firstName"
          label="Username"
          variant="outlined"
          size="small"
          onChange={handleUser}
          required
        />
        <TextField
          id="outlined-basic"
          name="lastName"
          label="password"
          variant="outlined"
          size="small"
          onChange={handleUser}
          required
        />
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </FormStyles>
    </div>
  );
};

export default Register;
