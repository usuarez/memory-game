import { AppThunk } from "./../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cardsPayload, stringPayload } from "../../types";
import { IGame } from "../../types/models/IGame";
import { ICard } from "../../types/models/ICard";

let initState: IGame = {
  difficult: "easy",
  points: 0,
  cards: [],
  openedCards: [],
  discoveredCards: [],
  status: "not started",
  moves: {
    fails: 0,
    count: 0,
    multiplier: 1,
  },
};
const gameSlice = createSlice({
  name: "game",
  initialState: initState,
  reducers: {
    setCards: (state, { payload }: PayloadAction<{ value: ICard[] }>) => {
      state.cards = payload.value;
    },
    setOpenedCard: (state, { payload }: PayloadAction<{ value: ICard[] }>) => {
      if (state.openedCards.length === 2) {
        state.openedCards = [];
      } else {
        state.openedCards = payload.value;
      }
    },
    clearOpenedCards: (state) => {
      state.openedCards = [];
    },
    setCardsMatch: (state, { payload }: PayloadAction<string>) => {
      if (!state.discoveredCards.includes(payload)) {
        state.discoveredCards = [payload, ...state.discoveredCards];
        state.points += state.moves.multiplier * 10;
        state.moves.count += 1;
        state.moves.multiplier += 1;
      }
    },
    setDifficult: (state, { payload }: PayloadAction<stringPayload>) => {
      state.difficult = payload.value;
    },
    setStatus: (state, { payload }: PayloadAction<stringPayload>) => {
      if (payload.value === "not started") {
        state.difficult = "easy";
        state.points = 0;
        state.cards = [];
        state.openedCards = [];
        state.discoveredCards = [];
        state.status = "not started";
        state.moves.fails = 0;
        state.moves.count = 0;
        state.moves.multiplier = 1;
      } else {
        state.status = payload.value;
      }
    },

    setFailMove: (state) => {
      state.moves.count += 1;
      state.moves.fails += 1;
      state.moves.multiplier = 1;
    },
  },
});
// export reducer methods to dispatch actions
export const {
  setDifficult,
  setStatus,
  setCards,
  setOpenedCard,
  setCardsMatch,
  clearOpenedCards,
  setFailMove,
} = gameSlice.actions;
export default gameSlice.reducer;

//Actions
export const setGameDifficult = (data: stringPayload): AppThunk => {
  return async (dispatch) => {
    dispatch(setDifficult(data));
  };
};

export const setGameStatus = (data: stringPayload): AppThunk => {
  return async (dispatch) => {
    dispatch(setStatus(data));
  };
};

export const setGameCards = (data: cardsPayload): AppThunk => {
  return async (dispatch) => {
    dispatch(setCards(data));
  };
};

export const setGameOpenCards = (data: cardsPayload): AppThunk => {
  return async (dispatch) => {
    dispatch(setOpenedCard(data));
  };
};

export const setGameMatchCards = (data: string): AppThunk => {
  return async (dispatch) => {
    dispatch(setCardsMatch(data));
  };
};

export const setGameClearOpenCards = (): AppThunk => {
  return async (dispatch) => {
    dispatch(clearOpenedCards());
  };
};

export const setGameFailMove = (): AppThunk => {
  return async (dispatch) => {
    dispatch(setFailMove());
  };
};

