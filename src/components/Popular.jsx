import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useArea } from "../utils/useArea";
import { Container } from "../style/Container";
import { Button } from "../style/Button";
import { StyledPopular, Slides } from "../style/Popular.styled";

const Popular = () => {
  const foods = useArea();

  return (
    <StyledPopular>
      <h1 className="popular-title">Popular items</h1>

      <Slides>
        <Button className="prev-slide btn-slide">
          <FaChevronLeft />
        </Button>

        <Container>
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={2}
            navigation={{
              nextEl: ".next-slide",
              prevEl: ".prev-slide",
            }}
            breakpoints={{
              768: {
                slidesPerView: 5,
              },
            }}
          >
            {!foods ? (
              <h1>Loading...</h1>
            ) : !foods.meals ? null : (
              foods.meals.slice(4, 14).map((food) => (
                <SwiperSlide className="slide" key={food.idMeal}>
                  <img src={food.strMealThumb} alt="" />
                  <p className="food-name">
                    {food.strMeal.length > 25
                      ? food.strMeal.slice(0, 25) + "..."
                      : food.strMeal}
                  </p>
                  <p className="price">
                    ${(food.idMeal % 10) + 1}.{(food.idMeal % 100) + 3}
                  </p>
                  <Button className="btn-order">Order Now</Button>
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </Container>

        <Button className="next-slide btn-slide">
          <FaChevronRight />
        </Button>
      </Slides>
    </StyledPopular>
  );
};

export default Popular;
