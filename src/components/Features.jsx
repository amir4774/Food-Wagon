import FeaturesCards from "./FeaturesCards";
import { StyledFeatures } from "../style/Features.styled";

const Features = () => {
  return (
    <StyledFeatures>
      <div className="container">
        <FeaturesCards />
      </div>
    </StyledFeatures>
  );
};

export default Features;
