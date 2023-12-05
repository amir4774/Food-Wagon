import { StyledFoodCard } from "../style/FoodCard.style";

const FoodCard = ({ food }) => {
  return (
    <StyledFoodCard>
      <img src={food.strMealThumb} />
      <h4>{food.strMeal}</h4>
      <div className="remaining">
        <h5>{food.idMeal % 10} Remaining</h5>
      </div>
    </StyledFoodCard>
  );
};

export default FoodCard;
