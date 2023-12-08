import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { useArea } from "../utils/useArea";
import { Button } from "../style/Button";
import { SlideImage, FoodName, Price } from "../style/Slider.styled";

const Slider = () => {
  const foods = useArea();

  return (
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
            <SlideImage src={food.strMealThumb} alt="" />
            <FoodName className="food-name">
              {food.strMeal.length > 25
                ? food.strMeal.slice(0, 25) + "..."
                : food.strMeal}
            </FoodName>
            <Price>
              ${(food.idMeal % 10) + 1}.{(food.idMeal % 100) + 3}
            </Price>
            <Button className="btn-order">Order Now</Button>
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
};

export default Slider;
