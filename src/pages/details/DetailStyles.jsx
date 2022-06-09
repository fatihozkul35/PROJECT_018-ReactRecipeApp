import styled from "styled-components";

export const MainDiv = styled.div`
  text-align: center;
  margin: 2rem auto;
  padding: 0.5rem;
  height: 100%;
  gap: 0.5rem;
  flex-wrap: wrap;
  max-width: 700px;
`;

export const CardDiv = styled.div`
  background: #00abbd;
  color: #012030;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem;
  max-width: 600px;
  border-radius: 15px;
  box-shadow: 3px 3px 20px 10px black;
  line-height: 10px;
  & h1 {
    line-height: 40px;
    color: white;
    font-style: oblique;
    font-weight: bold;
    text-shadow: 2px 2px 2px black;
  }
`;

export const Img = styled.img`
  width: 50%;
  border-radius: 15px;
  box-shadow: 3px 3px 20px 5px black;
`;

export const Button = styled.button`
  background: #f2a71b;
  cursor: pointer;
  width: 6rem;
  border: none;
  color: white;
  text-shadow: 0 1px 0 black;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem;
  border: 1px solid #f2a71b;
  border-radius: 15px;
  &:hover {
    background: white;
    color: #f2a71b;
    border: 1px solid #f2a71b;
  }
`;
