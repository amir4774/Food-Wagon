import Countries from "./Countries";
import Subscription from "./Subscription";
import { Container } from "../style/Container";
import { StyledCopyright, StyledFooter } from "../style/Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Countries />

        <Subscription />

        <StyledCopyright>
          <p>All rights Reserved &nbsp; &copy; &nbsp; Your Company, 2021</p>
          <p>Made with 💛 by Themewagon</p>
        </StyledCopyright>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
