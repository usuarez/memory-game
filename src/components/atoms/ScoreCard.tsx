import { FC } from "react";
import { TScores } from "../../types/models/TScores";

interface IScoreCard {
  data: TScores;
  idx: number;
}

export const ScoreCard: FC<IScoreCard> = ({ data, idx }) => {
  const { user, game } = data;
  return (
    <>
      <div className='ScoreCard'>
        <p>
          {idx + 1}{" "}
          {idx === 0 ? "🥇" : idx === 1 ? "🥈" : idx === 2 ? "🥉" : null}
        </p>
        <p>{user}</p>
        <p>{game.difficult}</p>
        <p>{game.points}</p>
      </div>
    </>
  );
};

