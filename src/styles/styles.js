import styled from "@emotion/styled";
import signInJPG from "../assets/signIn.jpg";

export const regisMain = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
  backgroundImage: `url(${signInJPG})`,
};
export const styleImg = {
  width: "100px",
  height: "100px",
  // zIndex: "2",
};
// export const formStyles = {
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignItems: "center",
//   width: "50%",
//   height: "50%",
//   border: "1px solid gray",
//   borderRadius: "50%",
//   padding: "10px",
//   gap: ".8rem",
//   overflow: "hidden",
// };
export const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
  border: 2px solid #479cc3;
  border-radius: 50%;
  padding: 10px;
  gap: 0.8rem;
  overflow: hidden;
  box-shadow: 0px 0px 20px 20px #479cc3;
`;

export const TextFieldStyles = {
  background: "#479cc3",
};
