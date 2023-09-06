import Button from "@/components/button";
import ROUTES_OBJECT from "@/utils/RoutesObject";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-6xl font-semibold text-sky-500">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-200 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600 dark:text-slate-500">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center">
          <Link href={ROUTES_OBJECT.home}>
            <Button icon="<-">Go back home</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
