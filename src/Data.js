import { createSlice, configureStore } from "@reduxjs/toolkit";
import axios from "axios";

const data = createSlice({
  name: "data",
  initialState: {
    res: null,
    empty: true,
    location: null,
    notFound:false
  },
  reducers: {
    setData(state, action) {
      state.res = action.payload;
      // console.log(action.payload);
    },
    setLocation(state, action) {
      console.log(action.payload);
      state.location = action.payload;
    },
    setEmpty(state, action) {
      state.empty = action.payload;
    },
    setFound(state, action) {
      state.notFound = action.payload;
    }
  },
});

const store = configureStore({
  reducer: {
    globalData: data.reducer,
  },
});


export const global_data = data.actions;

export default store;

export function fetchD(loc) {
  return async function fetchData(dispatch,setSate) {
    try {
      const res = await axios.post(
        `https://api.weatherapi.com/v1/forecast.json?key=9784c73bde0e49c9bbd110143230101&q=${loc}&days=1&aqi=no&alerts=no`
      );
      console.log(res.data);
      dispatch(global_data.setData(res.data));
    } catch (e) {
      dispatch(global_data.setFound(true));
      // console.log(e);
      dispatch(global_data.setData(null));
      // console.log(e);
    }
  };
}
