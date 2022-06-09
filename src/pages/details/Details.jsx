import { MainDiv, CardDiv, Img, Button } from "./DetailStyles";
import { useLocation } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  return (
    <MainDiv>
      <CardDiv>
        <Img src={state.recipe.image} alt="" />
        <h1>{state.recipe.label}</h1>
        <p>Region:{state.recipe.cuisineType[0]}</p>
        <p>Calories: {Math.round(state.recipe.calories)}</p>
        {state.recipe.digest.slice(0, 4).map((item, index) => (
          <p key={index}>
            {item.label} : {Math.round(item.total)}
          </p>
        ))}
        <Button onClick={() => navigate(`/`)}>Go Back</Button>
      </CardDiv>
    </MainDiv>
  );
};

export default Details;
