import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import FooterForm from "./FooterForm";
import { StyledFollow, Media } from "../style/Follow.styled";

const Follow = () => {
  return (
    <StyledFollow>
      <h4 className="follow-title">Follow us</h4>
      <Media>
        <ul>
          <li>
            <a href="#">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitter />
            </a>
          </li>
        </ul>
      </Media>
      <p>Receive exclusive offers in your mailbox</p>
      <FooterForm />
    </StyledFollow>
  );
};

export default Follow;
