import React from "react";
import { Button, Circle, Form, Img, Input, Main } from "./LoginStyles";
import signinBgImg from "../../assets/img/signIn.jpg"; //! here it can be changed bg-img of Login-page
import meal2 from "../../assets/img/meal2.svg";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <Main img={signinBgImg}>
      <Circle>
        <Img src={meal2} />
        <Form>
          <Input type="text" placeholder="Enter your username" />
          <Input type="password" placeholder="Enter your password" />
          <Button type="submit" onClick={handleLogin}>
            SIGNIN
          </Button>
        </Form>
        {/* ! Firebas ile google girisi yapılacak */}
        <Button>SIGNIN WITH GOOGLE</Button>
        <div>
          <p>
            Do not you have an account yet?{" "}
            <span
              style={{ cursor: "pointer", color: "red" }}
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </span>
          </p>
        </div>
      </Circle>
    </Main>
  );
};

export default Login;
