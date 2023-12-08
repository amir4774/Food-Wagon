import { FaChevronRight } from "react-icons/fa";
import { Button } from "../style/Button";
import { StyledCTA, Content, CTATitle } from "../style/CTA.styled";
import CTA_bg from "../assets/CTA.png";

const CTA = () => {
  return (
    <StyledCTA style={{ backgroundImage: `url(${CTA_bg})` }}>
      <Content>
        <CTATitle>
          Are you ready to order with the best deals?
        </CTATitle>
        <Button className="cta-btn">
          Proceed to order <FaChevronRight className="chevron-right" />
        </Button>
      </Content>
    </StyledCTA>
  );
};

export default CTA;
