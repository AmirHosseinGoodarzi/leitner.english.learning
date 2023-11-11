"use client";

import Button from "@/components/button";
import FlippingCard from "@/components/flippingCard";
import InnerContentLoading from "@/components/innerContentLoading";
import PageHeader from "@/components/pageHeader";
import { useGetAllWords, useMoveWord } from "@/services/Words";
import { ButtonTypes } from "@/utils/enums";
import Image from "next/image";
import { useState } from "react";
import { Check2All, EmojiFrownFill } from "react-bootstrap-icons";

export default function Today() {
  const [activedCardIndex, setActivedCardIndex] = useState(0);
  const { data: words, isLoading: wordsLoading } = useGetAllWords();
  const { mutate: moveWord, isLoading: moveWordLoading } = useMoveWord();

  const moveWordHandler = (isOk: boolean) => {
    moveWord(
      {
        _id: words[activedCardIndex]._id,
        isOk,
        category: words[activedCardIndex].category,
      },
      {
        onSuccess: (response) => {
          if (response.status) {
            setActivedCardIndex(activedCardIndex + 1);
          }
        },
      }
    );
  };
  return (
    <div className="relative pb-10">
      <PageHeader
        hint="Today"
        title="Review your today words"
        description="Try to answer the meanings and pronunciation fast"
      />
      <p className="text-lg">
        Today you’ll have{" "}
        <b className="text-white">
          {words ? words.length - activedCardIndex : "---"}
        </b>{" "}
        words for review
      </p>
      <br />
      <br />
      {wordsLoading ? (
        <InnerContentLoading />
      ) : words?.length > 0 && words[activedCardIndex] ? (
        <>
          <div className="flex flex-col justify-center items-center gap-7">
            <FlippingCard word={words[activedCardIndex]} />
            <footer className="flex flex-col-reverse sm:flex-row items-center justify-center gap-5 sticky bottom-0 w-full rounded-md p-2">
              <Button
                variant={ButtonTypes.Outline}
                loading={moveWordLoading}
                icon={<EmojiFrownFill className="text-2xl" />}
                onClick={() => {
                  moveWordHandler(false);
                }}
              >
                I don’t know
              </Button>
              <Button
                variant={ButtonTypes.Fill}
                icon={<Check2All className="text-2xl" />}
                loading={moveWordLoading}
                onClick={() => {
                  moveWordHandler(true);
                }}
              >
                I know this
              </Button>
            </footer>
          </div>
        </>
      ) : (
        <div>
          <Image
            src="./assets/images/empty.svg"
            width={250}
            height={250}
            alt="..."
            className="mx-auto mb-5"
          />
          <p className="text-center">
            That`s great 👍 You reviewed all the words or you have no word for
            review <b className="text-slate-700 dark:text-slate-300">Today</b>,
            <br />
            Now You can add new words to your vocabulary storage <br />
            or <br /> We`ll meet eachother tomorrow.
          </p>
        </div>
      )}
    </div>
  );
}
