import { useSelector } from "react-redux";
import { StyledCountries, Ul } from "../style/Footer.styled";

const Countries = () => {
  const countries = useSelector((state) => state.country.countries);

  return (
    <StyledCountries>
      <h3>Our top countries</h3>
      <Ul>
        {countries ?
          countries.map((country) => <li key={country}>{country}</li>) : <h3>Loading...</h3>}
      </Ul>
    </StyledCountries>
  );
};

export default Countries;
