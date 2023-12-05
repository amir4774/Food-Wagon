import { StyledHowWork } from "../style/HowWork.styled";
import HowWorkData from "../utils/HowWork";

const HowWork = () => {
  return (
    <StyledHowWork>
      <div className="container">
        <h1 className="main-title">How does it work</h1>

        <div className="icons">
          {HowWorkData.map((item) => (
            <div key={item.id}>
              <img src={item.src} alt="" />
              <h4 className="how-title">{item.title}</h4>
              <p className="how-caption">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </StyledHowWork>
  );
};

export default HowWork;
