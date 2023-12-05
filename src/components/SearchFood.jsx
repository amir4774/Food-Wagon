import { Button } from "../style/Button";
import {
  StyledSerachFood,
  Form,
  Input,
  Marker,
} from "../style/SerachFood.styled";
import delivery_icon from "../assets/icon.png";
import pickup_icon from "../assets/pickup.png";
import search_icon from "../assets/search_food.png";
import marker from "../assets/marker.png";

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

        <Form>
          <Marker src={marker} alt="" />
          <Input type="text" placeholder="Enter Your Address" />
          <Button type="submit" className="submit-btn">
            <img src={search_icon} alt="" /> Find Food
          </Button>
        </Form>
      </div>
    </StyledSerachFood>
  );
};

export default SearchFood;
