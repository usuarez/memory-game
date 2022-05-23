import { useState } from "react";
import { Button } from "react-bootstrap";
import { setGameDifficult } from "../../redux/reducers/gameReducer";
import { useAppDispatch } from "../../redux/store";

export const DifficultSelection = () => {
  const difficults = ["easy", "normal", "hard", "pro", "insane"];
  const [isActive, setIsActive] = useState("normal");
  const dispatch = useAppDispatch();
  const handleSetDifficult = (d: string) => {
    dispatch(setGameDifficult({ value: d }));
    setIsActive(d);
  };
  return (
    <>
      <h4>Difficult</h4>

      <div className='d-flex flex-wrap justify-content-center'>
        {difficults.map((d, idx) => (
          <Button
            key={`difbtn-${idx}`}
            onClick={() => handleSetDifficult(d)}
            className={`gbtn c-color text-capitalize mx-2 my-2 text-black ${
              isActive === d ? "active text-white" : ""
            }`}
          >
            {d}
          </Button>
        ))}
      </div>
    </>
  );
};

