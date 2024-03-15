import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  text: "",
  loading: false,
  message: false,
  infoTitle: "",
  infoText: "",
  isError: false,
};

export const MainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.message = true;
      state.infoTitle = "Unsuccess";
      state.infoText = action.payload;
      state.isError = true;
    },
    setInfo: (state, action) => {
      state.message = true;
      state.infoTitle = "Success";
      state.infoText = action.payload;
      state.isError = false;
    },
    closeMessage: (state) => {
      state.message = false;
    },
  },
});

export const { setText, setLoading, setError, setInfo, closeMessage } =
  MainSlice.actions;

export default MainSlice.reducer;
