"use client"
import sidebarItems from "@/data/sidebarItems";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="hidden lg:block fixed z-20 inset-0 top-[8rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19rem] pb-10 pl-8 pr-6 overflow-y-auto">
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
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
