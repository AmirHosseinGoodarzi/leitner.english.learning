import { useState } from "react";
import "./flippingCard.scss";
import { WordType } from "@/utils/types";
import ROUTES_OBJECT from "@/utils/RoutesObject";
import { useSpeechSynthesis } from "react-speech-kit";
import Link from "next/link";
import { Pen, Speaker, VolumeMuteFill, VolumeUpFill } from "react-bootstrap-icons";

const FlippingCard = ({ word }: { word: WordType }) => {
  const [cardFlipped, setCardFlipped] = useState(false);

  const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis();

  const getPronunciation = (e: any) => {
    e.stopPropagation();
    if (speaking) {
      cancel();
    } else {
      // 105 - 106 - 107 - 108 - 109`
      speak({ text: word.front, voice: voices[107] });
    }
  };

  return (
    <div
      className={`flip_container cursor-pointer relative w-80 h-44 lg:w-96 lg:h-52 select-none ${
        cardFlipped ? "flipped" : ""
      }`}
      onClick={() => {
        setCardFlipped(!cardFlipped);
      }}
    >
      <div className="flip_side front relative font-bold flex items-center justify-center text-3xl text-center">
        {word.front}
        <div className="absolute top-2 right-2 flex items-center justify-center gap-2">
          <Link href={ROUTES_OBJECT.configCard + "/" + word._id}>
            <button
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="rounded-full transition-all text-xl p-2 hover:bg-gray-300"
            >
              <Pen />
            </button>
          </Link>
        </div>
        {supported ? (
          <div className="absolute bottom-1 left-1 flex items-center justify-center gap-2">
            <button
              onClick={getPronunciation}
              className="rounded-full transition-all text-2xl p-2 hover:bg-gray-300"
            >
              {speaking ? <VolumeMuteFill /> : <VolumeUpFill />}
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="flip_side back text-justify whitespace-pre-line">
        {word.back}
      </div>
    </div>
  );
};

export default FlippingCard;
