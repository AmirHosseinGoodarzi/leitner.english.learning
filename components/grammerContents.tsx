import React from "react";
import { ChevronDoubleDown } from "react-bootstrap-icons";

interface Props {
  children: React.ReactNode;
}
interface AccordionProps extends Props {
  title: string;
}

export function Accordion({ children, title }: AccordionProps) {
  return (
    <div className="flex flex-col overflow-hidden relative">
      <input className="absolute opacity-0 inset-0 peer" type="checkbox" />
      <div className="flex px-2 justify-between items-center peer-checked:font-bold py-2 border-b border-slate-900/10 dark:border-slate-50/[0.06]">
        <p className="text-xl text-slate-700 dark:text-white">{title}</p>
        <ChevronDoubleDown />
      </div>
      <div className="max-h-0 px-2 peer-checked:max-h-[800px] transition-all duration-500 peer-checked:py-5 text-justify">
        {children}
      </div>
    </div>
  );
}

export function Rule({ children }: Props) {
  return (
    <h2 className="text-lg text-slate-700 dark:text-white mb-5">{children}</h2>
  );
}

export function Example({ children }: Props) {
  return (
    <p className="text-base bg-[#111] p-5 rounded-md text-slate-200 mb-5">
      {children}
    </p>
  );
}
