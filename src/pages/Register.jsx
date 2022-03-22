import React from "react";
import { TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { regisMain } from "../styles/styles";

const register = () => {
  return (
    <div style={regisMain}>
      <form
        style={{
          ...regisMain,
          width: "50%",
          height: "50%",
          border: "1px solid red",
          borderRadius: "50%",
          padding: "10px",
        }}
      >
        {" "}
        <img src="../assets/meal2.svg" alt="here is a icon" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </form>
    </div>
  );
};

export default register;
