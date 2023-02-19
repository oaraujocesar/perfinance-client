"use client";

import { ButtonHTMLAttributes } from "react";
import { Tooltip } from "@mui/material";
import classes from "./Button.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: "primary" | "secondary" | "outline" | "icon";
  tip?: string;
}

export const Button = ({
  children,
  label,
  variant = "primary",
  tip,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <Tooltip title={tip}>
      <button className={`${classes[variant]}`} {...props}>
        {children ?? label}
      </button>
    </Tooltip>
  );
};
