export interface TScores {
  user: string;
  game: {
    difficult: "easy" | "normal" | "hard" | "pro" | "insane" | string;
    points: number;
    moves: {
      count: number;
      multiplier: number;
      fails: number;
    };
  };
}
