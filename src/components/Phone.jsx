import { StyledPhone, Flex, App } from "../style/Phone.styled";
import background_phone from "../assets/background_phone.png";
import phone from "../assets/phone.png";
import DownloadButtons from "./DownloadButtons";

const Phone = () => {
  return (
    <StyledPhone style={{ backgroundImage: `url(${background_phone})` }}>
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

            <DownloadButtons />
          </App>
        </Flex>
      </div>
    </StyledPhone>
  );
};

export default Phone;
