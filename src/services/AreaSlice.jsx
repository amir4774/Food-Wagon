import { createSlice } from "@reduxjs/toolkit";

const AreaSlice = createSlice({
  name: "area",

  initialState: {
    area: "American",
  },

  reducers: {
    changeArea: (state, action) => {
      state.area = action.payload;
    }
  },
});

export const { changeArea } = AreaSlice.actions;
export default AreaSlice.reducer;