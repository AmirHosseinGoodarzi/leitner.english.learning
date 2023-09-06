import PageHeader from "@/components/pageHeader";
import styles from "./leitnerView.module.scss";

export default function View() {
  return (
    <div className="relative pb-10">
      <PageHeader
        hint="Free view"
        title="Review your box at a glance"
        description="Click on each part too see the details"
      />
      <br />
      <br />
      <div className="w-full flex items-center justify-center">
        <ul className={styles.view_box}>
          <li
            className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200"
            style={{ "--i": 5 } as React.CSSProperties}
          >
            <div>
              <span>1</span>
              200
            </div>
          </li>
          <li
            className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200"
            style={{ "--i": 4 } as React.CSSProperties}
          >
            <div>
              <span>2</span>
              51
            </div>
          </li>
          <li
            className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200"
            style={{ "--i": 3 } as React.CSSProperties}
          >
            <div>
              <span>4</span>
              815
            </div>
          </li>
          <li
            className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            <div>
              <span>8</span>
              8448
            </div>
          </li>
          <li
            className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            <div>
              <span>15</span>
              4189
            </div>
          </li>
        </ul>
        {/* <div className={`${styles.view_box}`}>
          <div
            className={`${styles.content} flex flex-col lg:flex-row absolute w-full h-full left-0 overflow-hidden`}
          >
            <div
              className={`${styles.box_part} w-full h-[8%] lg:h-full lg:w-[8%]`}
            >
              <span>1</span>
              <span className="text-2xl text-black lg:rotate-90">1000</span>
            </div>
            <div
              className={`${styles.box_part} w-full h-[12%] lg:h-full lg:w-[12%]`}
            >
              <span>2</span>
              <span className="text-2xl text-black lg:rotate-90">2000</span>
            </div>
            <div
              className={`${styles.box_part} w-full h-[16%] lg:h-full lg:w-[16%]`}
            >
              <span>4</span>
              <span className="text-2xl text-black lg:rotate-90">2000</span>
            </div>
            <div
              className={`${styles.box_part} w-full h-[24%] lg:h-full lg:w-[24%]`}
            >
              <span>8</span>
              <span className="text-2xl text-black lg:rotate-90">2000</span>
            </div>
            <div
              className={`${styles.box_part} w-full h-[40%] lg:h-full lg:w-[40%]`}
            >
              <span>15</span>
              <span className="text-2xl text-black lg:rotate-90">2000</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
