import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { CardsBoard } from "../molecules/CardsBoard";
import { EndGame } from "../molecules/EndGame";
import { GameScore } from "../molecules/GameScore";

export const GameBoard = () => {
  const { name } = useSelector((state: RootState) => state.user);
  const { difficult } = useSelector((state: RootState) => state.game);
  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
      <h1 className='mt-3 mb-2'>
        {name}, this game is {difficult}
      </h1>
      <CardsBoard />
      <GameScore />
      <EndGame />
    </div>
  );
};

