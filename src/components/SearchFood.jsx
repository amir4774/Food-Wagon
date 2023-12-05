import Form from "../components/Form";
import { Button } from "../style/Button";
import { StyledSerachFood } from "../style/SerachFood.styled";
import delivery_icon from "../assets/icon.png";
import pickup_icon from "../assets/pickup.png";

const SearchFood = () => {
  return (
    <StyledSerachFood>
      <h1 className="show-case-title">Are you starving?</h1>
      <p className="caption">
        Within a few clicks, find meals that are accessible near you
      </p>

      <div className="card">
        <div className="buttons">
          <Button className="delivery-button">
            <img src={delivery_icon} alt="" /> Delivery
          </Button>
          <Button className="pickup-button">
            <img src={pickup_icon} alt="" /> Pickup
          </Button>
        </div>

        <Form />
      </div>
    </StyledSerachFood>
  );
};

export default SearchFood;
