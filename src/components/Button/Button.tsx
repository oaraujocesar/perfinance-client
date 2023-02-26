"use client";

import { HTMLAttributes } from "react";

import { Btn } from "./Button.styles";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label?: string;
}

export const Button = ({
  label,
  children,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <Btn
      className="rounded-xl p-[10.25px] text-base text-white bg-primary"
      {...props}
    >
      {children ?? label}
    </Btn>
  );
};
