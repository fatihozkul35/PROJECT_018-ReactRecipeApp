import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavbarOptions, Bar } from "./NavbarStyles";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Bar>
      <div>
        <Avatar
          style={{ cursor: "pointer" }}
          sx={{ bgcolor: deepOrange[500] }}
          onClick={() => navigate("/")}
        >
          N
        </Avatar>
      </div>
      <NavbarOptions>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Loginout</Link>
      </NavbarOptions>
    </Bar>
  );
};

export default Navbar;
