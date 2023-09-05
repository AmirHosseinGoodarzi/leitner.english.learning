"use client";
import ROUTES_OBJECT from "@/utils/RoutesObject";
import Link from "next/link";
import Image from "next/image";
import styles from "./home.module.scss";
import useTheme from "@/hooks/useTheme";
import { THEMES } from "@/utils/enums";
import useAuth from "@/hooks/useAuth";

export default function Home() {
  const { currentTheme } = useTheme();
  const { googleSignIn, user } = useAuth();
  const googleSignInHandler = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900">
      <div className="min-h-screen relative flex items-center justify-center p-8">
        <div className="sm:px-6 md:px-8">
          <div
            className={`absolute h-full inset-0 bottom-10 bg-bottom bg-no-repeat bg-slate-50 dark:bg-[#0B1120] ${
              currentTheme === THEMES.DARK
                ? styles.dark_index_beams
                : styles.index_beams
            }`}
          >
            <div
              className={`absolute inset-0 ${
                currentTheme === THEMES.DARK
                  ? styles.dark_bg_grid
                  : styles.bg_grid
              } bg-[bottom_1px_center] dark:bg-bottom dark:border-b dark:border-slate-100/5`}
              style={{
                maskImage: "linear-gradient(to bottom, transparent, black)",
                WebkitMaskImage:
                  "linear-gradient( to bottom, transparent, black )",
              }}
            ></div>
          </div>
          <div className="relative max-w-5xl mx-auto pt-10">
            <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
              Rapidly Learning English with Leitner`s method.
            </h1>
            <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
              This application will help you to
              <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
                {" "}
                improve{" "}
              </code>
              learning more English
              <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
                {" "}
                vocabularies
              </code>
              .
            </p>
            <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
              {user && user.email ? (
                <Link href={ROUTES_OBJECT.today}>
                  <button className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400">
                    Get started
                  </button>
                </Link>
              ) : (
                <div className="w-full md:w-1/2 mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 p-7 pb-0">
                  <button
                    onClick={googleSignInHandler}
                    className="bg-slate-900 dark:bg-slate-100 py-3 px-6 rounded-md text-white dark:text-slate-700"
                  >
                    <div className="flex item-center justify-center gap-3">
                      <Image
                        src="/assets/images/google.svg"
                        alt="G"
                        width={20}
                        height={20}
                        className="mt-0.5"
                      />
                      Sign in with Google
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <footer className="absolute bottom-0 left-0 w-full px-5 py-7 text-center text-black dark:text-white">
          &copy; Made with{" "}
          <span className="text-lg text-red-500">&#10084;</span>{" "}
          <a href="https://amirhosseingoodarzi.vercel.app/" target="_blank">
            by AmirHossein Goodarzi
          </a>
        </footer>
      </div>
    </div>
  );
}
