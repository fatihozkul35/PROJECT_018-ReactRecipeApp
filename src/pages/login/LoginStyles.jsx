import styled from "@emotion/styled";
// import signin from "../../assets/img/signIn.jpg";

export const Main = styled.div`
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Img = styled.img`
  width: 100px;
`;
export const Input = styled.input`
  font-family: "Indie Flower", cursive, sans-serif;
  font-size: 0.8rem;
  padding: 0.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-family: "Indie Flower", cursive, sans-serif;
`;

export const Button = styled.button`
  width: 5rem;
  font-family: "Indie Flower", cursive, sans-serif;
`;

export const Circle = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 50%;
  border: 5px solid #51a4cc;
`;
