import { useArea } from "../utils/useArea";
import FoodCard from "./FoodCard";
import { StyledShowSearchedFood, Cards } from "../style/ShowSearchedFood.style";
import { Container } from "../style/Container";

const ShowSearchedFood = () => {
  const foods = useArea();
  return (
    <StyledShowSearchedFood>
      <Container>
        {!foods ? (
          <h1>Loading...</h1>
        ) : !foods.meals ? (
          <h1>No food found</h1>
        ) : (
          <Cards>
            {foods.meals.slice(0, 4).map((food) => (
              <FoodCard key={food.idMeal} food={food} />
            ))}
          </Cards>
        )}
      </Container>
    </StyledShowSearchedFood>
  );
};

export default ShowSearchedFood;
