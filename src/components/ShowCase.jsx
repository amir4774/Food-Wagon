import SearchFood from "./SearchFood";
import { StyledShowCase, Content } from "../style/ShowCase.styled";
import { Container } from "../style/Container";
import image from "../assets/show_case_image.png";

const ShowCase = () => {
  return (
    <StyledShowCase>
      <Container>
        <Content>

          <SearchFood />
          
          <div>
            <img className="showcase_image" src={image} alt="" />
          </div>
        
        </Content>
      </Container>
    </StyledShowCase>
  );
};

export default ShowCase;
