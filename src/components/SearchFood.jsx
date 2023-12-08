import Form from "../components/Form";
import { Button } from "../style/Button";
import {
  StyledSearchFood,
  SearchFoodTitle,
  SearchFoodCaption,
  SearchFoodCard,
} from "../style/SearchFood.styled";
import delivery_icon from "../assets/delivery.png";
import pickup_icon from "../assets/pickup.png";

const SearchFood = () => {
  return (
    <StyledSearchFood>
      <SearchFoodTitle>Are you starving?</SearchFoodTitle>
      <SearchFoodCaption>
        Within a few clicks, find meals that are accessible near you
      </SearchFoodCaption>

      <SearchFoodCard>
        <div className="buttons">
          <Button className="delivery-button">
            <img src={delivery_icon} alt="" /> Delivery
          </Button>
          <Button className="pickup-button">
            <img src={pickup_icon} alt="" /> Pickup
          </Button>
        </div>

        <Form />
      </SearchFoodCard>
    </StyledSearchFood>
  );
};

export default SearchFood;
