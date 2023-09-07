"use client";

import PageHeader from "@/components/pageHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import Link from "next/link";
import ROUTES_OBJECT from "@/utils/RoutesObject";
import grammarTitles from "@/data/grammar";

export default function Grammar() {
  return (
    <div className="pb-10">
      <PageHeader
        hint="Syntax"
        title="Grammar"
        description="The whole system and structure of English"
      />
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
