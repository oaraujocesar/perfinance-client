"use client";

import { LinkProps } from "next/link";
import { CustomLink } from "./Link.styles";

interface LinkProperties extends LinkProps {
  children: React.ReactNode;
}

export const Link = ({ href, children }: LinkProperties): JSX.Element => {
  return <CustomLink href={href}>{children}</CustomLink>;
};
