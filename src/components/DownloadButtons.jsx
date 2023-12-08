import { Button } from "../style/Button";
import { AppButtons, Logo } from "../style/DownloadButtons.styled";
import google from "../assets/Google Play logo.png";
import apple from "../assets/Apple logo.png";

const DownloadButtons = () => {
  return (
    <AppButtons>
      <Button className="btn">
        <Logo>
          <img src={google} alt="" />
        </Logo>

        <div>
          <p className="first-text">Get it on</p>{" "}
          <p className="second-text">Google Play</p>
        </div>
      </Button>

      <Button className="btn">
        <Logo>
          <img src={apple} alt="" />
        </Logo>

        <div>
          <p className="first-text">Download on the</p>
          <p className="second-text">App Store</p>
        </div>
      </Button>
    </AppButtons>
  );
};

export default DownloadButtons;
