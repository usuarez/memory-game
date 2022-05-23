import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  setGameClearOpenCards,
  setGameFailMove,
  setGameMatchCards,
  setGameOpenCards,
} from "../../redux/reducers/gameReducer";
import { RootState, useAppDispatch } from "../../redux/store";
import { ICard } from "../../types/models/ICard";
interface IGameCard {
  data: ICard;
}

export const Card: FC<IGameCard> = ({ data }) => {
  const { img, id } = data;
  const dispatch = useAppDispatch();
  const { openedCards, discoveredCards, moves, points } = useSelector(
    (state: RootState) => state.game
  );
  const [isActive, setisActive] = useState(true);
  const [status, setstatus] = useState<string>("opened");

  useEffect(() => {
    const timer = setTimeout(() => {
      setisActive(false);
      setstatus("closed");
    }, 4000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (
      status === "opened" &&
      openedCards.length === 2 &&
      openedCards.map((oc) => oc.id).includes(id)
    ) {
      if (openedCards[0].img === openedCards[1].img) {
        //cards match
        setstatus("discovered");
        dispatch(setGameMatchCards(img as string));
      } else {
        //no match and is open

        setTimeout(() => {
          setstatus("closed");
        }, 1000);
      }
      //clear opened
      setisActive(!isActive);
      dispatch(setGameClearOpenCards());
    }
  }, [openedCards.length]);

  const handleCardClick = () => {
    //card is not discovered
    if (status === "closed") {
      setisActive(!isActive);
      setstatus("opened");
      //add card as opened
      if (openedCards.length < 2) {
        dispatch(setGameOpenCards({ value: [{ img, id }, ...openedCards] }));
        if (openedCards.length === 1) {
          if (img !== openedCards[0].img) {
            dispatch(setGameFailMove());
          }
        }
      }
    }
  };

  return (
    <div
      id={`${id}`}
      className={`GameCard ${isActive ? "active" : ""} `}
      onClick={handleCardClick}
    >
      <img src={img as string} alt='an icon' className={`${status}`} />
    </div>
  );
};

