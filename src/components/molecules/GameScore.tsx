import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const GameScore = () => {
  const { points, moves } = useSelector((state: RootState) => state.game);
  return (
    <>
      <div className='GameScore'>
        <p className='gbtn orange-color px-4 py-1 mx-1'>Points {points}</p>
        <p className='gbtn skyblue-color px-4 py-1 mx-1'>
          Multiplier {moves.multiplier}
        </p>
      </div>
    </>
  );
};

