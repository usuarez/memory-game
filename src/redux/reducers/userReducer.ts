import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stringPayload } from "../../types";
import { AppThunk } from "../store";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
  },
  reducers: {
    setUserName: (state, { payload }: PayloadAction<stringPayload>) => {
      state.name = payload.value;
    },
  },
});

export default userSlice.reducer;
export const { setUserName } = userSlice.actions;

export const setGameDifficult = (data: stringPayload): AppThunk => {
  return async (dispatch) => {
    dispatch(setUserName(data));
  };
};

