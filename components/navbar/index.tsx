import ThemeSelector from "../themeSelector";
import useAuth from "@/hooks/useTheme";
import { BoxArrowRight } from "react-bootstrap-icons";
import { THEMES } from "@/utils/enums";
import ROUTES_OBJECT from "@/utils/RoutesObject";
import { usePathname } from "next/navigation";
import Link from "next/link";
import useTheme from "@/hooks/useTheme";
import Image from "next/image";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const { currentTheme } = useTheme();
  const pathname = usePathname();
  const signOutHandler = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  const locationStyles =
    pathname !== ROUTES_OBJECT.home
      ? "lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06]"
      : "";

  return (
    <div
      className={`w-full fixed top-0 px-5 py-3 z-50 backdrop-blur bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent ${locationStyles}`}
    >
      <div className="w-full mx-auto max-w-5xl flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200">
        <Link href={ROUTES_OBJECT.home}>
          <Image
            src={
              currentTheme === THEMES.DARK
                ? "/assets/images/LogoW.png"
                : "/assets/images/LogoB.png"
            }
            alt="Logo"
            width={60}
            height={60}
          />
        </Link>
        <div className="flex items-center">
          {user ? (
            <div className="text-sm flex item-center gap-2">
              <div>{user.email}</div>
              <button
                onClick={signOutHandler}
                className="w-6 h-6 hover:text-black dark:hover:text-white cursor-pointer"
              >
                <BoxArrowRight />
              </button>
            </div>
          ) : (
            <></>
          )}
          <div className="items-center">
            <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-700">
              <ThemeSelector />
              <a
                href="https://github.com/AmirHosseinGoodarzi"
                target="_blank"
                className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
              >
                <span className="sr-only">Follow me on GitHub</span>
                <svg
                  viewBox="0 0 16 16"
                  className="w-5 h-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
