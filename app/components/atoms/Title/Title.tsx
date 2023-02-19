"use client";

import classes from "./Title.module.scss";

export interface TitleProps {
  text?: string;
}

export const Title = ({ text, ...props }: TitleProps): JSX.Element => {
  return <h2 className={classes.Title}>{text}</h2>;
};
