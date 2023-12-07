import { configureStore } from "@reduxjs/toolkit";
import AreaReduser from "./AreaSlice";
import CountriesReduser from "./CountriesSlice";

const Store = configureStore({
    reducer: {
        area: AreaReduser,
        country: CountriesReduser,
    }
})

export default Store;