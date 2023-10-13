"use client";

import { useEffect, useState } from "react";
import PageHeader from "@/components/pageHeader";
import styles from "./leitnerView.module.scss";
import { useView } from "@/services/Words";
import InnerContentLoading from "@/components/innerContentLoading";
import { CategoryArray, CategoryEnum } from "@/utils/enums";

export default function View() {
  const { data: viewBoxData, isLoading: viewBoxLoading } = useView();
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    if (viewBoxData) {
      let sum = 0;
      viewBoxData.forEach((item: { _id: CategoryEnum; count: number }) => {
        sum += item.count;
      });
      setTotalCount(sum);
    }
  }, [viewBoxData]);

  return (
    <div className="relative pb-10">
      <PageHeader
        hint="Free view"
        title="Review your box at a glance"
        description="Click on each part to see the details"
      />
      <p className="text-lg">
        You have <b className="text-white">{totalCount}</b> words in total.
      </p>
      <br />
      <br />
      <br />
      {viewBoxLoading ? (
        <InnerContentLoading />
      ) : (
        <div className="w-full flex items-center justify-center">
          <ul className={styles.view_box}>
            {CategoryArray.map((item: string | number, index: number) => {
              const i = CategoryArray.length - index;
              const finded = viewBoxData.find(
                (item: { _id: CategoryEnum; count: number }) =>
                  item._id === index
              );
              return (
                <li
                  key={index}
                  className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200"
                  style={{ "--i": i } as React.CSSProperties}
                >
                  <div>
                    <span>{item}</span>
                    {finded ? finded.count : 0}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
