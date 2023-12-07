import { createSlice } from "@reduxjs/toolkit";
import { returnAxiosInstance } from "../services/Axios";

const getCountries = async () => {
  try {
    const res = await returnAxiosInstance("list.php?a=list");
    const data = await res.data;

    const countriesName = data.meals.map((item) => item.strArea);
    return countriesName;
  } catch (error) {
    console.error(error);
  }
};

const CountriesSlice = createSlice({
  name: "country",

  initialState: {
    countries: await getCountries(),
  },

  reducers: {},
});

export default CountriesSlice.reducer;
