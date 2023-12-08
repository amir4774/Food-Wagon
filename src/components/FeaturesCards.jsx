import { Cards, Card, CardTitle } from "../style/Features.styled";
import discounts from "../assets/discounts.png";
import tracing from "../assets/tracing.png";
import quick from "../assets/quick.png";

const FeaturesCards = () => {
  return (
    <Cards>
      <Card>
        <img src={discounts} alt="" />
        <CardTitle>Daily Discounts</CardTitle>
      </Card>

      <Card>
        <img src={tracing} alt="" />
        <CardTitle>Live Tracing</CardTitle>
      </Card>

      <Card id="last-child">
        <img src={quick} alt="" />
        <CardTitle id="last-title">Quick Delivery</CardTitle>
      </Card>
    </Cards>
  );
};

export default FeaturesCards;
