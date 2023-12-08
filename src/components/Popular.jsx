import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Slider from "./Slider";
import { Container } from "../style/Container";
import { Button } from "../style/Button";
import { StyledPopular, Slides } from "../style/Popular.styled";

const Popular = () => {
  return (
    <StyledPopular>
      <h1 className="popular-title">Popular items</h1>

      <Slides>
        <Button className="prev-slide btn-slide">
          <FaChevronLeft />
        </Button>

        <Container>
          <Slider />
        </Container>

        <Button className="next-slide btn-slide">
          <FaChevronRight />
        </Button>
      </Slides>
    </StyledPopular>
  );
};

export default Popular;
