import { useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards";

const Home = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [selectedMealType, setSelectedMealType] = useState(
    mealType[0].toLowerCase()
  );
  const APP_ID = "821e7f1c";
  const APP_KEY = "ce1853cf8997c8edbc16d6be036973a4";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMealType}`;

  const getData = async () => {
    if (query) {
      const result = await axios.get(url);
      setRecipes(result.data.hits);
    } else {
      alert("please enter your meal");
    }
  };

  return (
    <div>
      <Header
        query={query}
        setQuery={setQuery}
        getData={getData}
        setSelectedMealType={setSelectedMealType}
        mealType={mealType}
      />

      <Cards recipes={recipes}></Cards>
    </div>
  );
};

export default Home;
