import { useEffect } from "react";
import { randomInsert } from "../../utils/randomInsert";
import { useSelector } from "react-redux";
import IconA from "../../assets/animals/bear.png";
import IconB from "../../assets/animals/cat.png";
import IconC from "../../assets/animals/dog.png";
import IconD from "../../assets/animals/duck.png";
import IconE from "../../assets/animals/frog.png";
import IconF from "../../assets/animals/lion.png";
import IconG from "../../assets/animals/monkey.png";
import IconH from "../../assets/animals/panda.png";
import IconI from "../../assets/animals/penguin.png";
import IconJ from "../../assets/animals/pig.png";
import IconK from "../../assets/animals/shark.png";
import IconL from "../../assets/animals/tiger.png";
import { RootState, useAppDispatch } from "../../redux/store";
import { setGameCards } from "../../redux/reducers/gameReducer";
import { Card } from "../atoms/Card";

export const CardsBoard = () => {
  const { difficult, cards } = useSelector((state: RootState) => state.game);
  const images = [
    IconA,
    IconB,
    IconC,
    IconD,
    IconE,
    IconF,
    IconG,
    IconH,
    IconI,
    IconJ,
    IconK,
    IconL,
  ];

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fillCards = (count: number) => {
      let sliceIconsArr = randomInsert(images.slice(0, count));
      dispatch(setGameCards({ value: sliceIconsArr }));
    };

    if (difficult) {
      let cardsCount = 0;
      switch (difficult) {
        case "easy":
          cardsCount = 6;
          break;
        case "normal":
          cardsCount = 8;
          break;
        case "hard":
          cardsCount = 10;
          break;
        case "pro":
          cardsCount = 12;
          break;
        case "insane":
          cardsCount = 12;
          break;

        default:
          cardsCount = 0;
          break;
      }

      fillCards(cardsCount as number);
    }
  }, []);

  return (
    <div className={`GameCards-container ${difficult}`}>
      {cards.length > 1 &&
        cards.map((c, idx) => <Card key={`card-game-${idx}`} data={c} />)}
    </div>
  );
};

