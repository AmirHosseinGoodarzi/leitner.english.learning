import PageHeader from "@/components/pageHeader";
import styles from "./leitnerView.module.scss";
// import InnerContentLoading from "@/components/innerContentLoading";

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
      {/* {true ? (
        <InnerContentLoading />
      ) : (
   
      )} */}
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
      </div>
    </div>
  );
}
