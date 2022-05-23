import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { MainMenu } from "./molecules/MainMenu";
import { GameBoard } from "./organisms/GameBoard";

export const Game = () => {
  const { status } = useSelector((state: RootState) => state.game);
  return (
    <div className='game'>
      <Container>
        {status === "not started" ? <MainMenu /> : <GameBoard />}
      </Container>
    </div>
  );
};

