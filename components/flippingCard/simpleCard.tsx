import { useState } from "react";
import styles from "./flippingCard.module.scss";
import { WordType } from "@/utils/types";

const SimpleFlippingCard = ({ word }: { word: WordType }) => {
  const [cardFlipped, setCardFlipped] = useState(false);

  return (
    <div
      className={`${
        styles.flip_container
      } cursor-pointer relative w-72 h-40 select-none ${
        cardFlipped ? styles.flipped : ""
      }`}
      onClick={() => {
        setCardFlipped(!cardFlipped);
      }}
    >
      <div
        className={`${styles.front} relative font-bold flex items-center justify-center text-2xl text-center`}
      >
        {word.front}
      </div>
      <div className={`${styles.back} text-justify whitespace-pre-line`}>
        {word.back}
      </div>
    </div>
  );
};

export default SimpleFlippingCard;
