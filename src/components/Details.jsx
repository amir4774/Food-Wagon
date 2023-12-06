import detailsData from "../utils/Details.json";
import DetailCard from "./DetailCard";
import { Container } from "../style/Container";

const Details = () => {
  return (
    <section>
      <Container>
        {detailsData.map((detail) => (
          <DetailCard
            key={detail.id}
            id={detail.id}
            src={detail.src}
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
