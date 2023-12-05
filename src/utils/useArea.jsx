import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { returnAxiosInstance } from "../services/Axios";

export const useArea = () => {
  const area = useSelector((state) => state.area.area);
  const [foods, setFoods] = useState(null);

  useEffect(() => {
    const getArea = async () => {
      try {
        const res = await returnAxiosInstance(`filter.php?a=${area}`);
        const data = await res.data;
        setFoods(data);
        console.log(data);
      } catch (error) {
        alert("Something went wrong! Please try again later.");
        console.error(error);
      }
    };

    getArea();
  }, [area]);

  return foods;
};
