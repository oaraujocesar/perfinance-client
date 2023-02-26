"use client";

import { ForwardedRef, forwardRef, InputHTMLAttributes, Ref } from "react";

import { Container, Error, Input } from "./TextField.styles";

export interface TextfieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMsg?: string;
}

export const Textfield = forwardRef(
  (props: TextfieldProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    return (
      <Container htmlFor={props.name}>
        <p className="text-primary">{props.label}</p>
        <Input {...props} ref={ref} />
        {props.errorMsg && (
          <Error className="color-red">{props.errorMsg}</Error>
        )}
      </Container>
    );
  }
);

Textfield.displayName = "Textfield";
