import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { setGameStatus } from "../../redux/reducers/gameReducer";
import { setUserName } from "../../redux/reducers/userReducer";
import { useAppDispatch } from "../../redux/store";
import { DifficultSelection } from "./DifficultSelection";
import { ScoreBoard } from "./ScoreBoard";
export const MainMenu = () => {
  const [playerName, setplayerName] = useState("");
  const dispatch = useAppDispatch();

  const handleStartGame = () => {
    if (playerName !== "") {
      dispatch(setUserName({ value: playerName }));
      dispatch(setGameStatus({ value: "started" }));
    }
  };
  const [showScoreBoard, setShowScoreBoard] = useState(false);
  return (
    <>
      <Row className='mainMenu'>
        <h1 className='my-3'>Memory Game</h1>
        <Col xs={12} className='d-flex justify-content-center mb-4'>
          <input
            type='text'
            value={playerName}
            placeholder='your name *is required'
            onChange={(e) => {
              setplayerName(e.target.value);
            }}
          />
        </Col>
        <Col xs={12} className='d-flex justify-content-center flex-column mb-4'>
          <DifficultSelection />
        </Col>
        <Col xs={12} className='d-flex  justify-content-center mb-4'>
          <Button onClick={handleStartGame} className='gbtn m-color'>
            Start
          </Button>
          <Button
            onClick={() => {
              setShowScoreBoard(true);
            }}
            className='gbtn c-color mx-3'
          >
            Scores
          </Button>
        </Col>
      </Row>
      <ScoreBoard show={showScoreBoard} setShowScoreBoard={setShowScoreBoard} />
    </>
  );
};

