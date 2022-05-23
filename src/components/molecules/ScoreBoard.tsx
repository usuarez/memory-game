import { Dispatch, FC, SetStateAction } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ScoreCard } from "../atoms/ScoreCard";

export const ScoreBoard: FC<{
  show: boolean;
  setShowScoreBoard: Dispatch<SetStateAction<boolean>>;
}> = ({ show, setShowScoreBoard }) => {
  const { scores } = useSelector((state: RootState) => state.score);
  const handleshowScoreModal = () => {
    setShowScoreBoard(!show);
  };

  return (
    <Modal show={show} contentClassName='gbtn score-container' size='lg'>
      <Modal.Body>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <h3>Scores</h3>
          <div className='ScoresContainer'>
            {[...scores]
              .sort((a, b) => {
                return a.game.points < b.game.points ? 1 : -1;
              })
              .map((sc, idx) => (
                <ScoreCard key={idx} data={sc} idx={idx} />
              ))}
          </div>
          <Button
            onClick={handleshowScoreModal}
            className='gbtn px-4 red-color'
          >
            Exit
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

