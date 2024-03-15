import { createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "./MainApi";
import { setText, setLoading, setError } from "./MainSlice";

export const fetchText = createAsyncThunk(
  "fetchText",
  async (data, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await mainApi.getText(data);
      thunkAPI.dispatch(setText(response?.data?.text));
      thunkAPI.dispatch(setLoading(false));
    } catch (e: any) {
      thunkAPI.dispatch(setLoading(false));
      thunkAPI.dispatch(
        setError("Sorry, there was an error, please try again"),
      );
    }
  },
);
