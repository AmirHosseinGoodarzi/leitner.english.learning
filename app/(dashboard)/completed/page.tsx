"use client";

import SimpleFlippingCard from "@/components/flippingCard/simpleCard";
import InnerContentLoading from "@/components/innerContentLoading";
import PageHeader from "@/components/pageHeader";
import { useGetAllWords } from "@/services/Words";
import { WordType } from "@/utils/types";
import Image from "next/image";

export default function Completed() {
  const { data: words, isLoading: wordsLoading } = useGetAllWords();
  return (
    <div className="relative pb-10">
      <PageHeader
        hint="Storage"
        title="Completed Cards"
        description="All the cards that you’d completed them"
      />
      <br />
      {wordsLoading ? (
        <InnerContentLoading />
      ) : words.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-5">
          {words.map((word: WordType, index: number) => {
            return <SimpleFlippingCard word={word} key={index} />;
          })}
        </div>
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
            You haven’t complete any words yet 😔,
            <br />
            Add new words to your vocabulary storage <br />
            and <br /> visit the application everyday.
          </p>
        </div>
      )}
    </div>
  );
}
