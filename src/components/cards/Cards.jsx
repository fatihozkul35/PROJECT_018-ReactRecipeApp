import { CardDiv, MainDiv, Img, Button } from "./CardStyles";
import { useNavigate } from "react-router-dom";
const Cards = ({ setRecipes, recipes }) => {
  const navigate = useNavigate();
  return (
    <MainDiv>
      {recipes.map((recipe, index) => {
        return (
          <CardDiv key={index}>
            <Img src={recipe["recipe"]["image"]} alt="" />
            <h3>{recipe["recipe"]["label"]}</h3>
            <Button onClick={() => navigate("/details", { state: recipe })}>
              Details
            </Button>
          </CardDiv>
        );
      })}
    </MainDiv>
  );
};

export default Cards;
