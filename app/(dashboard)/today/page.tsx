"use client";

import PageHeader from "@/components/pageHeader";
import { useGetAllWords, useMoveWord } from "@/services/Words";
import Image from "next/image";
import { useState } from "react";

export default function Today() {
  const [activedCardIndex, setActivedCardIndex] = useState(0);
  const { data: words, isLoading: wordsLoading } = useGetAllWords();
  const { mutate: moveWord, isLoading: moveWordLoading } = useMoveWord();

  const moveWordHandler = (isOk: boolean) => {
    moveWord(
      {
        id: words[activedCardIndex]._id,
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
  console.log({ words });
  return (
    <div className="relative pb-10">
      {/* <Loading show={wordsLoading} /> */}
      <PageHeader
        hint="Today"
        title="Review your today words"
        description="Try to answer the meanings and pronunciation fast"
      />
      <br />
      {words?.length > 0 && words[activedCardIndex] ? (
        <>
          <div className="flex justify-center items-center gap-5">
            {/* <FlippingCard word={words[activedCardIndex]} /> */}
          </div>
          <br />
          <br />
          <br />
          <br />
          <footer className="lg:h-16 flex items-center justify-center gap-5 flex-wrap-reverse sticky bottom-0 w-full rounded-md p-2">
            {/* <Button
              type={ButtonTypes.Outline}
              isLoading={moveWordLoading}
              onClick={() => {
                moveWordHandler(false);
              }}
            >
              I don't know !
            </Button>
            <Button
              type={ButtonTypes.Fill}
              icon={<Completed className="text-2xl" />}
              isLoading={moveWordLoading}
              onClick={() => {
                moveWordHandler(true);
              }}
            >
              I know this
            </Button> */}
          </footer>
        </>
      ) : (
        <div>
          <Image src="../assets/images/empty.svg" alt="..." className="mx-auto mb-5" />
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
