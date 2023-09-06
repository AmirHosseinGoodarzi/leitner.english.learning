"use client"; // Error components must be Client Components

import { useEffect } from "react";

import ROUTES_OBJECT from "@/utils/RoutesObject";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-6xl font-semibold text-sky-500">Error</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-200 sm:text-5xl">
          Oooops !
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600 dark:text-slate-500">
          Something went wrong!
          <br /> Report your problem to website owner, please.
        </p>
        <div className="mt-10 flex items-center justify-center">
          <a href={ROUTES_OBJECT.home}>
            {/* <Button icon="<-">Go back home</Button> */}
            Go back home
          </a>
        </div>
      </div>
    </main>
  );
}
