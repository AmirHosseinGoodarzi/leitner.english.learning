import { useState } from "react";
import styles from "./flippingCard.module.scss";
import { WordType } from "@/utils/types";
import ROUTES_OBJECT from "@/utils/RoutesObject";
import { useSpeechSynthesis } from "react-speech-kit";
import Link from "next/link";
import {
  Files,
  Pen,
  VolumeMuteFill,
  VolumeUpFill,
} from "react-bootstrap-icons";
import toast from "react-hot-toast";

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
  const copyHandler = () => {
    navigator.clipboard.writeText(word.front).then(
      function () {
        toast.success("Copied to clipboard");
      },
      function (err) {
        console.error("Async: Could not copy text:", err);
        toast.error("Error in copy word !");
      }
    );
  };

  return (
    <div
      className={`${
        styles.flip_container
      } cursor-pointer relative w-80 h-44 lg:w-96 lg:h-52 select-none ${
        cardFlipped ? styles.flipped : ""
      }`}
      onClick={() => {
        setCardFlipped(!cardFlipped);
      }}
    >
      <div
        className={`${styles.front} relative font-bold flex items-center justify-center text-3xl text-center`}
      >
        {word.front}
        <div className="absolute top-2 right-2 flex items-center justify-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              copyHandler();
            }}
            className="rounded-full transition-all text-xl p-2 hover:bg-gray-300"
          >
            <Files />
          </button>
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
      <div className={`${styles.back} text-justify whitespace-pre-line`}>
        {word.back}
      </div>
    </div>
  );
};

export default FlippingCard;
