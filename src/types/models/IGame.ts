import { ICard } from "./ICard";

export interface IGame {
  difficult: "easy" | "normal" | "hard" | "pro" | "insane" | string;
  points: number;
  cards: ICard[];
  status: "not started" | "started" | "paused" | string;
  openedCards: ICard[];
  discoveredCards: string[];
  moves: {
    count: number;
    multiplier: number;
    fails: number;
  };
}

