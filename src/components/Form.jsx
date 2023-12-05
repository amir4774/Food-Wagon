import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeArea } from "../services/AreaSlice";
import { StyledForm, Marker, Input } from "../style/Form.styled";
import { Button } from "../style/Button";
import search_icon from "../assets/search_food.png";
import marker from "../assets/marker.png";

const Form = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      alert("Please Enter Something!");
      return;
    }
    dispatch(changeArea(value));
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Marker src={marker} alt="" />
      <Input
        type="text"
        placeholder="Enter Your Country Like: Canadian"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <Button type="submit" className="submit-btn">
        <img src={search_icon} alt="" /> Find Food
      </Button>
    </StyledForm>
  );
};

export default Form;
