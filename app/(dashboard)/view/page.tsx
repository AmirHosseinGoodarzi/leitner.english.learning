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
        <div className={styles.view_box}>
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
        </div>
      </div>
    </div>
  );
}
