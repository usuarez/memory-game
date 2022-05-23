import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TScores } from "../../types/models/TScores";
import { AppThunk } from "../store";

export interface IScores {
  scores: TScores[];
}
const initState: IScores = {
  scores: [
    {
      user: "Dev Bot",
      game: {
        points: 210,
        moves: {
          fails: 0,
          count: 6,
          multiplier: 7,
        },
        difficult: "easy",
      },
    },
    {
      user: "Nana Bot",
      game: {
        points: 130,
        moves: {
          fails: 7,
          count: 15,
          multiplier: 3,
        },
        difficult: "hard",
      },
    },
    {
      user: "Insane Bot",
      game: {
        points: 780,
        moves: {
          fails: 0,
          count: 12,
          multiplier: 13,
        },
        difficult: "insane",
      },
    },
  ],
};
const scoresSlice = createSlice({
  name: "scores",
  initialState: initState,
  reducers: {
    setScores: (state, { payload }: PayloadAction<TScores>) => {
      state.scores = [...state.scores, payload];
    },
  },
});

export default scoresSlice.reducer;

export const { setScores } = scoresSlice.actions;

export const setNewScore = (data: TScores): AppThunk => {
  return async (dispatch) => {
    dispatch(setScores(data));
  };
};

