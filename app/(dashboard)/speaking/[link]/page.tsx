"use client";

import { useRef, useState } from "react";
import PageHeader from "@/components/pageHeader";
import speakingTitles from "@/data/speaking";
import speakingContents from "@/data/speakingContents";
import RoutesObject from "@/utils/RoutesObject";
import ROUTES_OBJECT from "@/utils/RoutesObject";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SpeakingTitleType {
  title: string;
  href: string;
}
export default function SpeakingContent({
  params,
}: {
  params: { link: string };
}) {
  const [filteredList, setFilteredList] = useState<Array<SpeakingTitleType>>(
    []
  );
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const searchTimeoutRef = useRef<any>();
  const debounce = (fn: () => void, delay: number) => {
    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
    searchTimeoutRef.current = setTimeout(fn, delay);
  };
  const searchHandler = (key: string) => {
    const q = key.toLowerCase();
    if (q) {
      const newList = speakingTitles.filter((item) =>
        item.title.toLocaleLowerCase().includes(q)
      );
      if (newList.length === 0) setError("There are no items with this key...");
      else setError("");
      setFilteredList(newList);
    } else {
      setError("");
      setFilteredList([]);
    }
  };

  const targetIndex = speakingTitles.findIndex(
    (item) => item.href === "/" + params.link
  );
  const previousIndex =
    (targetIndex - 1 + speakingTitles.length) % speakingTitles.length;
  const nextIndex = (targetIndex + 1) % speakingTitles.length;

  const prevItem = speakingTitles[previousIndex];
  const target = speakingTitles[targetIndex];
  const nextItem = speakingTitles[nextIndex];

  if (!target) {
    router.push(ROUTES_OBJECT.idioms);
    return <></>;
  }

  return (
    <div className="relative pb-10">
      <div className="relative form_wrapper w-full md:w-1/2 mx-auto space-y-8">
        <div>
          <input
            id="searchKey"
            className={`form_input ${error ? "invalid" : ""}`}
            placeholder=" "
            autoComplete="new-password"
            onChange={(e) => {
              debounce(() => searchHandler(e.target.value), 1000);
            }}
          />
          <label htmlFor="searchKey" className="form_label">
            Search in speaking subjects
          </label>
          <p className="error_message">{error}</p>
        </div>
        {filteredList.length > 0 && (
          <article className="absolute flex flex-col gap-1 overflow-y-auto max-h-56 shadow-xl top-4 left-0  w-full rounded-b-md p-3 z-10 text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800">
            {filteredList.map((item, index) => {
              return (
                <Link
                  href={ROUTES_OBJECT.speaking + item.href}
                  className="hover:bg-slate-100 dark:hover:bg-slate-700 transition-all px-3 py-1 rounded-md cursor-pointer"
                  key={index}
                >
                  {item.title}
                </Link>
              );
            })}
          </article>
        )}
      </div>
      <br />
      <PageHeader
        hint="Speaking"
        title={target.title}
        description=""
      />
      <div className="text-gray-200 text-lg">{speakingContents[target.href as keyof typeof speakingContents]}</div>
      <br /><br />
      <div className="flex flex-wrap items-center justify-center md:justify-between gap-5">
        <Link
          href={ROUTES_OBJECT.speaking + prevItem.href}
          className="text-sky-500 py-3 px-7 hover:bg-sky-500/10 border rounded-md border-sky-500"
        >
          {"<-- "}
          {prevItem.title}
        </Link>
        <Link
          href={RoutesObject.speaking + nextItem.href}
          className="text-sky-500 py-3 px-7 hover:bg-sky-500/10 border rounded-md border-sky-500"
        >
          {nextItem.title}
          {" -->"}
        </Link>
      </div>
    </div>
  );
}
