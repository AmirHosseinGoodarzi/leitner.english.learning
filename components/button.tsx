import React from "react";
import { ButtonTypes } from "@/utils/enums";
import { ButtonHTMLAttributes } from "react";
import { BeatLoader } from "react-spinners";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  variant?: ButtonTypes;
  icon?: any;
}

const Button = ({
  loading,
  variant = ButtonTypes.Fill,
  icon,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`flex gap-2 m-2 px-5 py-3 rounded-md disabled:opacity-60 transition-all hover:scale-105 ${
        variant === ButtonTypes.Fill
          ? "bg-slate-800 dark:bg-sky-500 text-white"
          : "border border-slate-800 dark:border-sky-500 text-slate-800 dark:text-sky-500"
      }`}
      disabled={loading}
      {...props}
    >
      {icon && !loading ? <span>{icon}</span> : <></>}
      {loading ? <div className="mx-8"><BeatLoader color="white" size={7} /></div> : children}
    </button>
  );
};

export default Button;
