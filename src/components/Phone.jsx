import { StyledPhone, Flex, App, AppButtons } from "../style/Phone.styled";
import { Button } from "../style/Button";
import phone from "../assets/phone.png";
import google from "../assets/Google Play logo.png";
import apple from "../assets/Apple logo.png";

const Phone = () => {
  return (
    <StyledPhone>
      <div className="container">
        <Flex>
          <div className="phone-image">
            <img src={phone} alt="" />
          </div>

          <App>
            <h1 className="app-title">Install the app</h1>
            <p className="app-caption">
              It's never been easier to order food. Look for the finest
              discounts and you'll be lost in a world of delectable food.
            </p>
            <AppButtons>
              <Button className="btn">
                <div className="logo">
                  <img src={google} alt="" />
                </div>

                <div>
                  <p className="first-text">GET IT ON</p>{" "}
                  <p className="second-text">Google Play</p>
                </div>
              </Button>

              <Button className="btn">
                <div className="logo">
                  <img src={apple} alt="" />
                </div>

                <div>
                  <p className="first-text">Download on the</p>
                  <p className="second-text">App Store</p>
                </div>
              </Button>
            </AppButtons>
          </App>
        </Flex>
      </div>
    </StyledPhone>
  );
};

export default Phone;
