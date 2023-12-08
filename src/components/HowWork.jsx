import HowWorkData from "../utils/HowWork";
import { StyledHowWork, Icons } from "../style/HowWork.styled";
import Map_Marker from "../assets/Map_Marker.png";
import order from "../assets/order.png";
import pay from "../assets/pay.png";
import enjoy from "../assets/enjoy.png";

const HowWork = () => {

  const images = [Map_Marker, order, pay, enjoy];

  return (
    <StyledHowWork>
      <div className="container">
        <h1 className="main-title">How does it work</h1>

        <Icons>
          {HowWorkData.map((item) => (
            <div key={item.id}>
              <img src={images[item.id]} alt="" />
              <h4 className="how-title">{item.title}</h4>
              <p className="how-caption">{item.caption}</p>
            </div>
          ))}
        </Icons>
      </div>
    </StyledHowWork>
  );
};

export default HowWork;
