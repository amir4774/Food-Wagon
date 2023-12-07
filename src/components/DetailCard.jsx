import { FaChevronRight } from "react-icons/fa";
import { Button } from "../style/Button";
import {
  StyledDetailCard,
  DetailImage,
  Text,
  DetailTitle,
  DetailCaption,
} from "../style/Details.styled";

const DetailCard = ({ id, src, title, yellow_title, description }) => {
  return (
    <StyledDetailCard id={id}>
      <DetailImage id={id}>
        <img src={src} alt="" />
      </DetailImage>

      <Text>
        <DetailTitle>
          {title} <span className="yellow-title">{yellow_title}</span>
        </DetailTitle>
        <DetailCaption className="detail-caption">{description}</DetailCaption>
        <Button className="btn-detail">
          Proceed to order{" "}
          <span className="chevron-right">
            <FaChevronRight />
          </span>
        </Button>
      </Text>
    </StyledDetailCard>
  );
};

export default DetailCard;
