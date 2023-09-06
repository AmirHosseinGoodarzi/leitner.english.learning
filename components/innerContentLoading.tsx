import React from "react";
import { CircleLoader } from "react-spinners";

const InnerContentLoading = () => {
  return (
    <div className="absolute z-40 w-full h-full flex flex-col gap-16 lg:gap-10 items-center justify-center p-10">
      <CircleLoader size={100} color="#38bdf8" />
      <h2 className="text-2xl lg:text-xl text-slate-800 dark:text-slate-200 animate-pulse text-center">
        Data loading ...
      </h2>
    </div>
  );
};

export default InnerContentLoading;
