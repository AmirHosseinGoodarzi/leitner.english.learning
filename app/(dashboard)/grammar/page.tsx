"use client";

import { useRef, useState } from "react";
import PageHeader from "@/components/pageHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import Link from "next/link";
import ROUTES_OBJECT from "@/utils/RoutesObject";
import grammarTitles from "@/data/grammar";

interface GrammerTitleType {
  title: string;
  href: string;
  subtitle?: string;
  description?: string;
}

export default function Grammar() {
  const [filteredList, setFilteredList] = useState<Array<GrammerTitleType>>([]);
  const [error, setError] = useState<string>("");
  const searchTimeoutRef = useRef<any>();
  const debounce = (fn: () => void, delay: number) => {
    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
    searchTimeoutRef.current = setTimeout(fn, delay);
  };
  const searchHandler = (key: string) => {
    const q = key.toLowerCase();
    if (q) {
      const newList = grammarTitles.filter((item) =>
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

  return (
    <div className="pb-10">
      <PageHeader
        hint="Syntax"
        title="Grammar"
        description="The whole system and structure of English"
      />
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
            Search
          </label>
          <p className="error_message">{error}</p>
        </div>
        {filteredList.length > 0 && (
          <article className="absolute flex flex-col gap-1 overflow-y-auto max-h-56 shadow-xl top-4 left-0  w-full rounded-b-md p-3 z-10 text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800">
            {filteredList.map((item, index) => {
              return (
                <Link
                  href={ROUTES_OBJECT.grammar + item.href}
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
      <br />
      <Swiper effect="cards" grabCursor={true} modules={[EffectCards]}>
        {grammarTitles.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Link href={ROUTES_OBJECT.grammar + item.href}>
                <div className="flex flex-col items-center justify-center text-center">
                  <h4 className="font-bold text-xl">{item.title}</h4>
                  {item.subtitle ? <p>{item.subtitle}</p> : <></>}
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
