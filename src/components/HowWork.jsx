import HowWorkData from "../utils/HowWork";
import {
  StyledHowWork,
  MainTitle,
  Icons,
  Icon,
  HowImage,
  HowTitle,
  HowCaption,
} from "../style/HowWork.styled";
import Map_Marker from "../assets/Map_Marker.png";
import order from "../assets/order.png";
import pay from "../assets/pay.png";
import enjoy from "../assets/enjoy.png";

const HowWork = () => {
  const images = [Map_Marker, order, pay, enjoy];

  return (
    <StyledHowWork>
      <div className="container">
        <MainTitle>How does it work</MainTitle>

        <Icons>
          {HowWorkData.map((item) => (
            <Icon key={item.id}>
              <HowImage src={images[item.id]} alt="" />
              <HowTitle>{item.title}</HowTitle>
              <HowCaption>{item.caption}</HowCaption>
            </Icon>
          ))}
        </Icons>
      </div>
    </StyledHowWork>
  );
};

export default HowWork;
