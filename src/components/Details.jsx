import detailsData from "../utils/Details.json";
import DetailCard from "./DetailCard";
import { Container } from "../style/Container";
import detail_1 from "../assets/detail_1.png";
import detail_2 from "../assets/detail_2.png";
import detail_3 from "../assets/detail_3.png";

const Details = () => {
  const images = [detail_1, detail_2, detail_3];

  return (
    <section>
      <Container>
        {detailsData.map((detail) => (
          <DetailCard
            key={detail.id}
            id={detail.id}
            src={images[detail.id - 1]}
            title={detail.title}
            yellow_title={detail.yellow_title}
            description={detail.description}
          />
        ))}
      </Container>
    </section>
  );
};

export default Details;
