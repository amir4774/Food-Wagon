import { FaChevronRight } from "react-icons/fa";
import { Button } from "../style/Button";
import { StyledCTA, Content } from "../style/CTA.styled";
import CTA_bg from "../assets/CTA.png";

const CTA = () => {
  return (
    <StyledCTA style={{ backgroundImage: `url(${CTA_bg})` }}>
      <Content>
        <h1 className="cta-title">
          Are you ready to order with the best deals?
        </h1>
        <Button className="cta-btn">
          Proceed to order <FaChevronRight className="chevron-right" />
        </Button>
      </Content>
    </StyledCTA>
  );
};

export default CTA;
