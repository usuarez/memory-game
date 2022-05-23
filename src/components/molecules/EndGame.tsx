import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { RootState, useAppDispatch } from "../../redux/store";
import { setGameStatus } from "../../redux/reducers/gameReducer";
import { setNewScore } from "../../redux/reducers/scoresReducer";

export const EndGame = () => {
  const { points, moves, cards, discoveredCards, difficult, openedCards } =
    useSelector((state: RootState) => state.game);
  const { name } = useSelector((state: RootState) => state.user);
  const [isWinner, setIsWinner] = useState(false);
  const [showEndGameModal, setShowEndGameModal] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (cards.length > 5 || openedCards.length === 2) {
      let isSuccessBoard = cards.length / 2 === discoveredCards.length;
      if (isSuccessBoard) {
        setIsWinner(true);
        setShowEndGameModal(true);
        dispatch(
          setNewScore({ user: name, game: { points, moves, difficult } })
        );
      } else if (difficult === "pro" && moves.count >= 30) {
        setIsWinner(false);
        setShowEndGameModal(true);
      } else if (difficult === "insane" && moves.count >= 20) {
        setIsWinner(false);
        setShowEndGameModal(true);
      }
    }
  }, [discoveredCards.length, cards, openedCards.length]);

  const handleFinish = () => {
    dispatch(setGameStatus({ value: "not started" }));
  };
  return (
    <Modal show={showEndGameModal} contentClassName='gbtn'>
      <Modal.Body>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <h3>
            The game is finished, {isWinner ? "You won!" : "You Loss :( "}{" "}
          </h3>
          <p className='gbtn py-2 px-4 c-color text-center'>{points} Points</p>
          <p className='gbtn py-2 px-4 orange-color text-center'>
            {moves.count} Moves
          </p>
          <p className='gbtn py-2 px-4 orange-color text-center'>
            {moves.fails} Errors
          </p>
          {!isWinner && (
            <>
              <p className='gbtn py-2 px-4 red-color text-center'>
                {cards.length / 2 - discoveredCards.length} Remaining Cards
              </p>
            </>
          )}
          <Button onClick={handleFinish} className='gbtn px-4 red-color'>
            Exit
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

