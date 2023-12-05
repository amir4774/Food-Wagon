import { configureStore } from "@reduxjs/toolkit";
import AreaReduser from "./AreaSlice";

const Store = configureStore({
    reducer: {
        area: AreaReduser
    }
})

export default Store;