import { Cards } from "../style/Features.styled";
import discounts from "../assets/discounts.png";
import tracing from "../assets/tracing.png";
import quick from "../assets/quick.png";

const FeaturesCards = () => {
  return (
    <Cards>
      <div className="card">
        <img src={discounts} alt="" />
        <h1 className="card-title">Daily Discounts</h1>
      </div>

      <div className="card">
        <img src={tracing} alt="" />
        <h1 className="card-title">Live Tracing</h1>
      </div>
      <div className="card">
        <img src={quick} alt="" />
        <h1 className="card-title" id="last-child">Quick Delivery</h1>
      </div>
    </Cards>
  );
};

export default FeaturesCards;
