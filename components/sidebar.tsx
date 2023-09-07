"use client";

import { useEffect, useRef } from "react";
import sidebarItems from "@/data/sidebarItems";
import useSidebar from "@/hooks/useSidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BoxArrowRight, XLg } from "react-bootstrap-icons";
import useAuth from "@/hooks/useAuth";
import useOnClickOutside from "@/hooks/useOnClickOutside";

const Sidebar = () => {
  const pathname = usePathname();
  const { isOpen, setIsOpen } = useSidebar();
  const { logOut, user } = useAuth();
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(sidebarRef, () => {
    setIsOpen(false);
  });

  const signOutHandler = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div
      ref={sidebarRef}
      className={`fixed z-50 inset-0 top-0 lg:top-[8rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19rem] pb-10 pl-8 pr-6 overflow-y-auto bg-slate-50 dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent pt-16 lg:pt-0 transition-all ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      <button
        className="lg:hidden absolute top-5 right-5 hover:text-red-500"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <XLg className="text-2xl" />
      </button>
      <nav id="nav" className="lg:text-sm lg:leading-6 relative">
        <ul>
          {sidebarItems["mainPart"].map((item, index) => {
            if (item.to && !item.href) {
              const active = pathname === item.to;
              return (
                <li key={index}>
                  <Link
                    className={`group flex items-center lg:text-sm lg:leading-6 mb-4 ${
                      active
                        ? "text-sky-500 font-bold"
                        : "text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                    }`}
                    href={item.to}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                </li>
              );
            }
            return (
              <li key={index}>
                <a
                  className="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                  href={item.href}
                  target="_blank"
                >
                  {item.icon}
                  {item.name}
                </a>
              </li>
            );
          })}
          <li className="mt-12 lg:mt-8">
            <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
              Other parts
            </h5>
            <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
              {sidebarItems["Other parts"].map((item, index) => {
                return (
                  <li
                    data-active={pathname === item.to ? "true" : "false"}
                    key={index}
                  >
                    <Link
                      className={`block border-l pl-4 -ml-px ${
                        pathname === item.to
                          ? "text-sky-500 border-current font-semibold dark:text-sky-400"
                          : "border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                      }`}
                      href={item.to}
                      dangerouslySetInnerHTML={{ __html: item.name }}
                    ></Link>
                  </li>
                );
              })}
            </ul>
          </li>
          {user && user.email ? (
            <li className="flex flex-col mt-16">
              <p className="text-sm mb-2">Logged in as:</p>
              <p className="text-sm text-ellipsis overflow-hidden w-52 text-slate-700 dark:text-white">
                {user.email}
              </p>
              <br />
              <button
                onClick={signOutHandler}
                className="flex items-center lg:text-sm lg:leading-6 mb-4 text-slate-700 hover:text-sky-500 dark:text-slate-400 dark:hover:text-slate-300"
              >
                <BoxArrowRight className="text-xl mr-4" />
                Log out
              </button>
            </li>
          ) : (
            <></>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
